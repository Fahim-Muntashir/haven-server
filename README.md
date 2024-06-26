# Real Estate Management System

## Overview

This is a Real Estate Management System designed to facilitate the management of agents, apartments, and user interactions within a real estate platform. The system allows for user registration, account management, apartment management, review submissions, and administrative oversight.

## Entities

### User
- Represents users of the system.
- Can be Super Admin, Admin, or Agent.
- Each user has a profile.

### Admin
- Has administrative privileges.
- Can create Agents and approve their apartments for publishing.

### Agent
- Represents agents who manage apartments.
- Can add multiple apartments.
- Apartments require Admin approval before publishing.

### Review
- Users can submit reviews for agents.
- Each user can give one review for each agent.

### Apartment
- Represents individual apartments.
- Belongs to an Agent.
- Can have multiple apartments associated with one Agent.

## Relations

### User to Profile
- One-to-one relation between User and Profile.

### Review
- One-to-many relation between Agent and Review.

### Apartment
- One-to-few relation between Agent and Apartment.

### User to Agent Review
- One-to-one relation between User and Agent Review.

## Workflow

### User Account Creation
- Users register themselves.
- Upon registration, they need to update their profile.

### Admin Actions
- Admin can create Agents.
- Admin approves Agent's apartments before publishing.

### Agent Actions
- Agents can add multiple apartments.
- Apartments require Admin approval before they can be published.

### User Interaction
- Users can submit reviews for agents.

## Prisma Tables

- User
- Admin
- Agent
- Review
- Apartment
- UserProfile
- UserAgentReview
