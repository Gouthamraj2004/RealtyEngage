import React from 'react';
import { MapPin, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ProjectCard = ({ project, onEnquire }) => {
  const getStatusIcon = () => {
    switch (project.status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'ongoing':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'upcoming':
        return <AlertCircle className="h-4 w-4 text-orange-600" />;
    }
  };

  const getStatusColor = () => {
    switch (project.status) {
      case 'completed':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'ongoing':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'upcoming':
        return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
            {getStatusIcon()}
            <span className="capitalize">{project.status}</span>
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{project.location}</span>
        </div>

        {project.completionDate && (
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">Completion: {project.completionDate}</span>
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs">
                +{project.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{project.price}</p>
          </div>
          <button
            onClick={() => onEnquire(project.id)}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;