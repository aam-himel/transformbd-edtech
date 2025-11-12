'use client';

import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Phone, User, GraduationCap, Briefcase } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-2">Your account information</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Overview Card */}
            <Card className="lg:col-span-1">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={user.image_path || undefined} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl font-semibold">
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{user.name}</CardTitle>
                <Badge variant="secondary" className="mt-2">
                  {user.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    <span>OneID: {user.oneID}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Joined: {formatDate(user.created_at)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Details Card */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <User className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{user.name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      OneID
                    </label>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-900 font-mono">{user.oneID}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{user.phone || 'Not provided'}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profession
                    </label>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{user.profession || 'Not provided'}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education
                    </label>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{user.education || 'Not provided'}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">
                        {user.dob ? formatDate(user.dob) : 'Not provided'}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                    <span className="text-gray-900">{user.address || 'Not provided'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}