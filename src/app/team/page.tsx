'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Users, UserPlus, Edit, Trash2, X, Crown, Search, Filter, Mail, MapPin, Eye, Calendar, Clock, Award, Shield, Activity, Sparkles, Star } from 'lucide-react';
import { PricingPlansManager, type PricingPlan, formatCurrency } from '@/lib/billing-manager';
import { useToast } from '@/components/ui/toast';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  department: string;
  status: 'Active' | 'Away' | 'Inactive';
  planId?: string;
}

const initialTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    email: 'sarah@company.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=150&h=150&fit=crop&crop=face',
    department: 'Product',
    status: 'Active',
    planId: 'pro_plan'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Lead Developer',
    email: 'michael@company.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    department: 'Engineering',
    status: 'Active',
    planId: 'enterprise_plan'
  },
  {
    id: '3',
    name: 'Emma Davis',
    role: 'UI/UX Designer',
    email: 'emma@company.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    department: 'Design',
    status: 'Away',
    planId: 'basic_plan'
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    role: 'Marketing Manager',
    email: 'alex@company.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    department: 'Marketing',
    status: 'Active',
    planId: 'pro_plan'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    role: 'DevOps Engineer',
    email: 'lisa@company.com',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    department: 'Engineering',
    status: 'Active',
    planId: 'enterprise_plan'
  },
  {
    id: '6',
    name: 'David Park',
    role: 'Sales Director',
    email: 'david@company.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    department: 'Sales',
    status: 'Active',
    planId: 'pro_plan'
  },
  {
    id: '7',
    name: 'Sophie Martin',
    role: 'Content Writer',
    email: 'sophie@company.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    department: 'Marketing',
    status: 'Away',
    planId: 'basic_plan'
  },
  {
    id: '8',
    name: 'James Wilson',
    role: 'Backend Developer',
    email: 'james@company.com',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    department: 'Engineering',
    status: 'Active',
    planId: 'enterprise_plan'
  }
];

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [availablePlans, setAvailablePlans] = useState<PricingPlan[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const { success, error } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    department: '',
    status: 'Active' as 'Active' | 'Away' | 'Inactive',
    planId: ''
  });

  useEffect(() => {
    const plans = PricingPlansManager.getPlans();
    setAvailablePlans(plans);
  }, []);

  // Filter and search logic
  const filteredTeamMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !filterDepartment || member.department === filterDepartment;
    const matchesStatus = !filterStatus || member.status === filterStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const departments = [...new Set(teamMembers.map(member => member.department))];
  const statuses = [...new Set(teamMembers.map(member => member.status))];

  const getMemberPlan = (planId?: string): PricingPlan | null => {
    if (!planId) return null;
    return availablePlans.find(plan => plan.id === planId) || null;
  };

  const getPlanBadge = (planId?: string) => {
    if (!planId) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
          No Plan
        </span>
      );
    }
    const plan = getMemberPlan(planId);
    if (!plan) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
          Unknown Plan
        </span>
      );
    }
    
    const badgeStyles = plan.popular 
      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' 
      : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    
    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeStyles}`}>
        {plan.popular && <Crown className="w-3 h-3" />}
        {plan.name}
      </span>
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Away':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  };

  const handleAddMember = () => {
    if (formData.name && formData.email && formData.role) {
      const newMember: TeamMember = {
        id: Date.now().toString(),
        name: formData.name,
        role: formData.role,
        email: formData.email,
        department: formData.department || 'General',
        status: formData.status,
        planId: formData.planId || undefined,
        avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=150&h=150&fit=crop&crop=face`
      };
      setTeamMembers([...teamMembers, newMember]);
      setFormData({ name: '', role: '', email: '', department: '', status: 'Active', planId: '' });
      setShowAddModal(false);
      success('Employee Added', `${formData.name} has been added to the team successfully.`);
    } else {
      error('Missing Information', 'Please fill in all required fields.');
    }
  };

  const handleEditMember = () => {
    if (selectedMember && formData.name && formData.email && formData.role) {
      const updatedMembers = teamMembers.map(member =>
        member.id === selectedMember.id
          ? { ...member, ...formData, planId: formData.planId || undefined }
          : member
      );
      setTeamMembers(updatedMembers);
      setShowEditModal(false);
      setSelectedMember(null);
      setFormData({ name: '', role: '', email: '', department: '', status: 'Active', planId: '' });
      success('Employee Updated', `${formData.name}'s information has been updated successfully.`);
    } else {
      error('Missing Information', 'Please fill in all required fields.');
    }
  };

  const handleDeleteMember = (id: string) => {
    const member = teamMembers.find(m => m.id === id);
    setTeamMembers(teamMembers.filter(member => member.id !== id));
    if (member) {
      success('Employee Removed', `${member.name} has been removed from the team.`);
    }
  };

  const openEditModal = (member: TeamMember) => {
    setSelectedMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      email: member.email,
      department: member.department,
      status: member.status,
      planId: member.planId || ''
    });
    setShowEditModal(true);
  };

  const openDetailsModal = (member: TeamMember) => {
    setSelectedMember(member);
    setShowDetailsModal(true);
  };

  return (
    <div className="min-h-screen bg-mesh">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-orange-400/30 dark:from-pink-500/20 dark:to-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Container className="py-12 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="gradient-text text-3xl font-bold mb-2">
            Team Management
          </h1>
          <p className="text-muted-foreground">
            Manage your team members, roles, and access levels
          </p>
        </motion.div>
        {/* Search and Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-modern p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search team members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="glass-input w-full pl-12 pr-12 py-4 text-card-foreground placeholder-muted-foreground"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              {/* Filters */}
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    value={filterDepartment}
                    onChange={(e) => setFilterDepartment(e.target.value)}
                    className="glass-input pr-10 appearance-none cursor-pointer min-w-[160px]"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
                
                <div className="relative">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="glass-input pr-10 appearance-none cursor-pointer min-w-[140px]"
                  >
                    <option value="">All Status</option>
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
                
                {/* Clear Filters */}
                {(searchTerm || filterDepartment || filterStatus) && (
                  <motion.button
                    onClick={() => {
                      setSearchTerm('');
                      setFilterDepartment('');
                      setFilterStatus('');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 glass-card hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 rounded-xl transition-all duration-200 font-medium flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear
                  </motion.button>
                )}
              </div>
            </div>
            
            {/* Add Button */}
            <motion.button
              onClick={() => setShowAddModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl group"
            >
              <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Add Team Member
            </motion.button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-purple-500" />
              Team Members
            </h2>
            <div className="flex items-center gap-4">
              {(searchTerm || filterDepartment || filterStatus) && (
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  {filteredTeamMembers.length} of {teamMembers.length} shown
                </span>
              )}
              <div className="glass-card px-4 py-2">
                <span className="text-sm font-bold gradient-text">
                  {filteredTeamMembers.length} {filteredTeamMembers.length === 1 ? 'member' : 'members'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        {filteredTeamMembers.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredTeamMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="card-modern group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openDetailsModal(member)}
              >
                <div className="p-6">
                  {/* Status & Premium Indicators */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(member.status)} animate-pulse`}></div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{member.status}</span>
                    </div>
                    {getMemberPlan(member.planId)?.popular && (
                      <div className="relative">
                        <Crown className="w-5 h-5 text-yellow-500" />
                        <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
                      </div>
                    )}
                  </div>
                  
                  {/* Profile */}
                  <div className="text-center mb-4">
                    <motion.img
                      src={member.avatar}
                      alt={member.name}
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 rounded-2xl object-cover mx-auto mb-3 shadow-lg ring-2 ring-white/50 dark:ring-gray-700/50 group-hover:ring-purple-200 dark:group-hover:ring-purple-700 transition-all duration-300"
                    />
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm gradient-text font-medium">{member.role}</p>
                  </div>

                  {/* Department */}
                  <div className="glass-card p-3 mb-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{member.department}</span>
                    </div>
                  </div>

                  {/* Plan */}
                  <div className="text-center mb-4">
                    {getPlanBadge(member.planId)}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDetailsModal(member);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full transition-all duration-200 flex items-center justify-center shadow-lg"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditModal(member);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full transition-all duration-200 flex items-center justify-center shadow-lg"
                      title="Edit Member"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteMember(member.id);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full transition-all duration-200 flex items-center justify-center shadow-lg"
                      title="Remove Member"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-modern text-center p-12"
          >
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-purple-500 dark:text-purple-400" />
              </div>
              <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {searchTerm || filterDepartment || filterStatus ? 'No team members found' : 'Build Your Dream Team'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              {searchTerm || filterDepartment || filterStatus 
                ? 'Try adjusting your search criteria or filters to find team members.'
                : 'Start building your team by adding your first employee and manage their access levels.'
              }
            </p>
            {!(searchTerm || filterDepartment || filterStatus) && (
              <motion.button
                onClick={() => setShowAddModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-semibold flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl group"
              >
                <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Add Your First Team Member
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Team Member Details Modal */}
        {showDetailsModal && selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetailsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
              className="w-full max-w-2xl max-h-[90vh] card-modern overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6 text-white">
                <motion.button
                  onClick={() => setShowDetailsModal(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </motion.button>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-white/30 shadow-xl"
                    />
                    {getMemberPlan(selectedMember.planId)?.popular && (
                      <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" />
                    )}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                    <p className="text-purple-100 font-medium">{selectedMember.role}</p>
                    <p className="text-purple-200/80 text-sm">ID: EMP-{selectedMember.id.padStart(4, '0')}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-card p-4 text-center">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(selectedMember.status)} mx-auto mb-2`}></div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                    <p className="font-bold text-gray-900 dark:text-white">{selectedMember.status}</p>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <MapPin className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Department</p>
                    <p className="font-bold text-gray-900 dark:text-white">{selectedMember.department}</p>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <Mail className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Contact</p>
                    <p className="font-bold text-gray-900 dark:text-white text-xs">{selectedMember.email}</p>
                  </div>
                </div>

                {/* Subscription Plan */}
                <div className="glass-card p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-yellow-500" />
                    Subscription Plan
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      {getPlanBadge(selectedMember.planId)}
                      {selectedMember.planId && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          {formatCurrency(getMemberPlan(selectedMember.planId)?.price || 0)}/{getMemberPlan(selectedMember.planId)?.billing}
                        </p>
                      )}
                    </div>
                    {getMemberPlan(selectedMember.planId)?.popular && (
                      <Crown className="w-8 h-8 text-yellow-500" />
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-4 pt-4">
                  <motion.button
                    onClick={() => {
                      setShowDetailsModal(false);
                      openEditModal(selectedMember);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl transition-all duration-200 flex items-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setShowDetailsModal(false);
                      handleDeleteMember(selectedMember.id);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl transition-all duration-200 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Add Team Member Modal */}
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-2xl max-h-[90vh] card-modern overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Add Team Member</h3>
                    <p className="text-purple-100">Create a new team member profile</p>
                  </div>
                  <motion.button
                    onClick={() => setShowAddModal(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                <form onSubmit={(e) => { e.preventDefault(); handleAddMember(); }} className="space-y-6">
                  {/* Personal Information */}
                  <div className="glass-card p-4 space-y-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      Personal Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-12 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-12 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Work Information */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Work Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full h-12 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter job title"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Department *
                        </label>
                        <select 
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full h-12 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          required
                        >
                          <option value="">Select department</option>
                          <option value="Engineering">🔧 Engineering</option>
                          <option value="Product">📱 Product</option>
                          <option value="Design">🎨 Design</option>
                          <option value="Marketing">📢 Marketing</option>
                          <option value="Sales">💼 Sales</option>
                          <option value="Operations">⚙️ Operations</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Status
                      </label>
                      <div className="flex gap-4">
                        {(['Active', 'Away', 'Inactive'] as const).map((status) => (
                          <label key={status} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="status"
                              value={status}
                              checked={formData.status === status}
                              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Active' | 'Away' | 'Inactive' })}
                              className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{status}</span>
                            <div className={`w-2 h-2 rounded-full ${
                              status === 'Active' ? 'bg-green-500' : 
                              status === 'Away' ? 'bg-yellow-500' : 'bg-gray-400'
                            }`}></div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subscription Plan */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Subscription Plan</h4>
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Choose Plan
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {availablePlans.map((plan) => (
                          <motion.label 
                            key={plan.id} 
                            whileHover={{ scale: 1.02 }}
                            className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                              formData.planId === plan.id 
                                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30' 
                                : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                            }`}
                          >
                            <input
                              type="radio"
                              name="planId"
                              value={plan.id}
                              checked={formData.planId === plan.id}
                              onChange={(e) => setFormData({ ...formData, planId: e.target.value })}
                              className="w-4 h-4 text-purple-600 focus:ring-purple-500 mr-3"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                {plan.popular && <Crown className="w-4 h-4 text-purple-600" />}
                                <span className="font-medium text-sm">{plan.name}</span>
                              </div>
                              <span className="text-xs text-gray-500">{formatCurrency(plan.price)}/{plan.billing}</span>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Footer Optimized */}
              <div className="p-6 border-t border-gray-200/20 dark:border-gray-700/20 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex justify-end space-x-4">
                  <motion.button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-base btn-secondary btn-md"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    onClick={(e) => { e.preventDefault(); handleAddMember(); }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-base btn-primary btn-md"
                  >
                    Add Employee
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Edit Employee Modal - OPTIMIZED FULLSCREEN */}
        {showEditModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowEditModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-4xl h-[90vh] bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Optimized */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/20 dark:border-gray-700/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Edit Employee</h3>
                  <p className="text-muted-foreground mt-1">
                    Update employee information and subscription
                  </p>
                </div>
                <motion.button
                  onClick={() => setShowEditModal(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-10 w-10 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Content Optimized */}
              <div className="flex-1 overflow-y-auto p-6">
                <form onSubmit={(e) => { e.preventDefault(); handleEditMember(); }} className="space-y-6">
                  {/* Profile Section */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-12 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-12 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Work Information */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Work Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full h-12 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter job title"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Department *
                        </label>
                        <select 
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full h-12 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          required
                        >
                          <option value="">Select department</option>
                          <option value="Engineering">🔧 Engineering</option>
                          <option value="Product">📱 Product</option>
                          <option value="Design">🎨 Design</option>
                          <option value="Marketing">📢 Marketing</option>
                          <option value="Sales">💼 Sales</option>
                          <option value="Operations">⚙️ Operations</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Status
                      </label>
                      <div className="flex gap-4">
                        {(['Active', 'Away', 'Inactive'] as const).map((status) => (
                          <label key={status} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="status"
                              value={status}
                              checked={formData.status === status}
                              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Active' | 'Away' | 'Inactive' })}
                              className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{status}</span>
                            <div className={`w-2 h-2 rounded-full ${
                              status === 'Active' ? 'bg-green-500' : 
                              status === 'Away' ? 'bg-yellow-500' : 'bg-gray-400'
                            }`}></div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subscription Plan */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-xl">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Subscription Plan</h4>
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Choose Plan
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {availablePlans.map((plan) => (
                          <motion.label 
                            key={plan.id} 
                            whileHover={{ scale: 1.02 }}
                            className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                              formData.planId === plan.id 
                                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30' 
                                : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                            }`}
                          >
                            <input
                              type="radio"
                              name="planId"
                              value={plan.id}
                              checked={formData.planId === plan.id}
                              onChange={(e) => setFormData({ ...formData, planId: e.target.value })}
                              className="w-4 h-4 text-purple-600 focus:ring-purple-500 mr-3"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                {plan.popular && <Crown className="w-4 h-4 text-purple-600" />}
                                <span className="font-medium text-sm">{plan.name}</span>
                              </div>
                              <span className="text-xs text-gray-500">{formatCurrency(plan.price)}/{plan.billing}</span>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Footer Optimized */}
              <div className="p-6 border-t border-gray-200/20 dark:border-gray-700/20 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex justify-end space-x-4">
                  <motion.button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-base btn-secondary btn-md"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    onClick={(e) => { e.preventDefault(); handleEditMember(); }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-base btn-primary btn-md"
                  >
                    Save Changes
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </div>
  );
}
