// Type definitions for the application
// These are now just documentation comments since we're using JavaScript

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} location
 * @property {string} price
 * @property {string} image
 * @property {string[]} features
 * @property {string} description
 * @property {'upcoming' | 'ongoing' | 'completed'} status
 * @property {string} [completionDate]
 */

/**
 * @typedef {Object} Enquiry
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} projectId
 * @property {string} message
 * @property {'pending' | 'responded' | 'closed'} status
 * @property {string} createdAt
 */

/**
 * @typedef {Object} Feedback
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {'feedback' | 'grievance' | 'suggestion'} type
 * @property {string} subject
 * @property {string} message
 * @property {'open' | 'in-progress' | 'resolved'} status
 * @property {'low' | 'medium' | 'high'} priority
 * @property {string} createdAt
 */

/**
 * @typedef {Object} Payment
 * @property {string} id
 * @property {string} projectId
 * @property {number} amount
 * @property {string} description
 * @property {'pending' | 'completed' | 'failed'} status
 * @property {'card' | 'bank' | 'upi'} method
 * @property {string} createdAt
 */

/**
 * @typedef {'light' | 'dark'} Theme
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} name
 * @property {'admin' | 'customer'} role
 * @property {string} [avatar]
 * @property {string} [phone]
 * @property {string} createdAt
 * @property {string} [lastLogin]
 */

/**
 * @typedef {Object} AuthState
 * @property {User | null} user
 * @property {boolean} isAuthenticated
 * @property {boolean} isLoading
 */

export {};