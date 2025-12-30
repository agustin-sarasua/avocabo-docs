---
sidebar_position: 1
title: Managing Users
description: Complete guide to managing students, teachers, and user accounts in PragmaTeach
---

# Managing Users

User management is essential for organizing your educational environment. This guide covers creating, editing, and managing all types of users in PragmaTeach.

## Accessing User Management

1. Navigate to **Users** in the sidebar
2. You'll see the User Management screen

:::note Administrator Access
User management features are only available to administrators.
:::

---

## User Roles

PragmaTeach supports four user roles:

| Role | Access Level | Typical Use |
|------|--------------|-------------|
| **Student** 🎓 | Access assigned courses, complete lessons | Learners |
| **Teacher** 👩‍🏫 | Create courses, manage students, view metrics | Educators |
| **Admin** 👔 | Full access including user and school management | Administrators |
| **Relative** 👨‍👩‍👧 | View linked student's progress | Parents/Guardians |

---

## Adding Users

### Individual User Creation

1. Click **Add User** button
2. Fill in user details:
   - **Name** - Full name
   - **Email** - Valid email address
   - **Role** - Select user role
   - **Group** - Optionally assign to a group

3. Click **Create**

The user will receive:
- Email with login credentials
- Welcome message
- Instructions to set password

### Bulk User Creation

Add multiple users at once:

1. Click **Add User** button
2. Select **Bulk Create** tab
3. Choose input method:
   - **Paste List** - Copy/paste names and emails
   - **Upload CSV** - Upload a spreadsheet

4. Configure:
   - Default role for all users
   - Default group assignment

5. Review and confirm

**CSV Format:**
```csv
name,email
John Smith,john.smith@school.edu
Jane Doe,jane.doe@school.edu
```

---

## Managing Existing Users

### Finding Users

Use the filters to find users:

| Filter | Options |
|--------|---------|
| **Search** | By name or email |
| **Role** | Student, Teacher, Admin, Relative |
| **Group** | Select a specific group |

### User Details Panel

Click on any user to see:
- Profile information
- Assigned groups
- Course access
- Activity history
- Related users (for relatives)

### Editing User Information

1. Click on a user
2. Click **Edit** in the details panel
3. Modify:
   - Name
   - Email
   - Role
   - Group assignments

4. Click **Save**

### Changing User Role

:::warning Role Change Impact
Changing a user's role affects their access permissions immediately.
:::

1. Select the user
2. Click **Edit**
3. Change the role dropdown
4. Confirm the change

### Deleting Users

:::danger Permanent Action
Deleting a user removes all their data including progress and history.
:::

1. Select the user
2. Click **Delete User**
3. Confirm deletion in the dialog

---

## User Verification Status

Users can be in different verification states:

| Status | Icon | Meaning |
|--------|------|---------|
| **Verified** | 🟢 ✓ | Email verified, can log in |
| **Pending** | 🟡 ○ | Created but not yet verified |

### Resending Verification

If a user didn't receive their email:

1. Find the user
2. Click **Resend Verification**
3. New email is sent

---

## Managing Student Progress

### Viewing Student Performance

From user details, see:
- Courses enrolled
- Lessons completed
- Exercise scores
- Time spent learning
- Last activity

### Using the AI Assistant

Ask questions about specific students:

```
"How is Maria Garcia performing in Math 7?"
```

```
"Which students haven't completed any lessons this week?"
```

---

## Relative Accounts

### What Are Relatives?

Relative accounts allow parents or guardians to:
- View linked student's progress
- Access reports
- Stay informed about learning

### Creating Relative Accounts

1. Create a new user with **Relative** role
2. Link to a student:
   - Open the relative's details
   - Click **Link Student**
   - Select the student(s)

### Relationship Types

| Type | Description |
|------|-------------|
| **Parent** | Mother, Father |
| **Guardian** | Legal guardian |
| **Sibling** | Brother, Sister |

---

## Best Practices

### User Creation

| Do | Don't |
|----|-------|
| ✅ Use valid email addresses | ❌ Create placeholder emails |
| ✅ Assign to groups immediately | ❌ Leave users ungrouped |
| ✅ Use full, correct names | ❌ Abbreviate names |
| ✅ Verify role assignments | ❌ Give excessive permissions |

### Account Security

| Do | Don't |
|----|-------|
| ✅ Encourage password resets | ❌ Share login credentials |
| ✅ Regularly review user list | ❌ Keep inactive accounts |
| ✅ Use appropriate roles | ❌ Make everyone admin |

### Organization

| Do | Don't |
|----|-------|
| ✅ Organize users in groups | ❌ Have all users ungrouped |
| ✅ Update when students change classes | ❌ Keep outdated assignments |
| ✅ Remove graduated/left students | ❌ Accumulate inactive users |

---

## Troubleshooting

### User Can't Log In

Check:
1. ✅ Email is correct (no typos)
2. ✅ Account is verified
3. ✅ Password has been set
4. ✅ Account is not deactivated

**Solution:** Send password reset email

### User Doesn't See Courses

Check:
1. ✅ User is in a group
2. ✅ Group is assigned to the course
3. ✅ Course is activated
4. ✅ User has the correct role

### Duplicate User Created

If you accidentally created a duplicate:
1. Check which account has activity/progress
2. Delete the account without activity
3. Inform the user which account to use

---

## Next Steps

- [Managing Groups](/docs/dashboard/users/managing-groups)
- [Understanding Metrics](/docs/dashboard/metrics)
- [Using the AI Assistant](/docs/dashboard/ai-assistant)

