'use client';

import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Settings } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function ProfileDropdown() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) return null;

  // Get initials from user name
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
          <Avatar className='h-9 w-9 cursor-pointer ring-2 ring-primary/10 hover:ring-primary/30 transition-all'>
            <AvatarImage src={user.image_path || undefined} alt={user.name} />
            <AvatarFallback className='bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold'>
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <span className='hidden lg:block text-sm font-medium text-gray-700'>
            {user.name}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{user.name}</p>
            <p className='text-xs leading-none text-muted-foreground'>
              {user.role || 'Student'}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/profile' className='cursor-pointer'>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/settings' className='cursor-pointer'>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className='cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50'
        >
          <LogOut className='mr-2 h-4 w-4' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
