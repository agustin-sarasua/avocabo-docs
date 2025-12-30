---
sidebar_position: 2
title: Managing Groups
description: Organize students and teachers into groups for efficient course management
---

# Managing Groups

Groups are essential for organizing users and controlling course access. This guide explains how to create and manage groups effectively.

## What Are Groups?

Groups are collections of users that help you:
- **Organize students** by class, grade, or cohort
- **Control course access** - assign courses to groups
- **Track progress** by group
- **Simplify management** - bulk operations

---

## Viewing Groups

### Group List

In User Management, groups appear in:
- **Group filter dropdown** - Select to filter users
- **Group sidebar** - Quick group access

### Group Details

Click on a group to see:
- Group name and description
- Member count
- List of all members
- Assigned courses

---

## Creating Groups

### New Group

1. Click **Create Group** button
2. Enter group details:
   - **Name** - e.g., "7th Grade A", "Spanish 101"
   - **Description** - Optional details about the group

3. Click **Create**

### Naming Conventions

Good group names are clear and consistent:

| Good Examples | Why |
|---------------|-----|
| "7th Grade Section A" | Clear grade and section |
| "2024 Spanish Beginners" | Year and level |
| "Math Club - Advanced" | Activity and level |

| Avoid | Why |
|-------|-----|
| "Group 1" | Not descriptive |
| "John's Class" | Teacher-dependent |
| "New Students" | Vague |

---

## Managing Group Members

### Adding Users to Groups

**Method 1: From User Details**
1. Select a user
2. Click **Edit**
3. Add group in the Groups field
4. Save

**Method 2: From Group View**
1. Select a group filter
2. Click **Add Members**
3. Search and select users
4. Confirm

**Method 3: During User Creation**
- Assign group when creating new users
- Select in the bulk creation form

### Removing Users from Groups

1. View the group
2. Find the user
3. Click the remove button (X)
4. Confirm removal

:::note
Removing from a group doesn't delete the user, only their group membership.
:::

### Moving Users Between Groups

1. Remove from current group
2. Add to new group

Or:
1. Edit user details
2. Change group assignment
3. Save

---

## Assigning Courses to Groups

### Why Assign Courses to Groups?

- Students only see courses their group is assigned to
- Manage access efficiently
- Different courses for different levels

### How to Assign

**From Course Details:**
1. Open the course
2. Go to **Groups** section
3. Click **Manage Groups**
4. Select groups to add
5. Save

**From Group View:**
1. View group details
2. See assigned courses
3. Add new course assignments

---

## Group Analytics

### Viewing Group Performance

From group details, see:
- Total lessons completed
- Average completion rate
- Top performers
- Students needing attention

### Using the AI Assistant

Ask group-specific questions:

```
"How is Group 7A performing in Science?"
```

```
"Compare progress between 7A and 7B"
```

```
"Which students in 7A are falling behind?"
```

---

## Deleting Groups

### Prerequisites

Before deleting, ensure:
- ✅ Group has no members (remove all first)
- ✅ No critical course assignments

### How to Delete

1. View the group
2. Remove all members
3. Click **Delete Group**
4. Confirm deletion

:::warning
You cannot delete a group that still has members. Remove all members first.
:::

---

## Best Practices

### Group Organization

| Do | Don't |
|----|-------|
| ✅ One student per group (usually) | ❌ Students in many groups |
| ✅ Clear, descriptive names | ❌ Vague names |
| ✅ Regular cleanup | ❌ Keep old empty groups |
| ✅ Document group purpose | ❌ Leave description empty |

### Course Assignment

| Do | Don't |
|----|-------|
| ✅ Assign courses to groups | ❌ Make all courses public |
| ✅ Review assignments regularly | ❌ Forget to update |
| ✅ Match course level to group | ❌ Random assignments |

### Maintenance

| When | Action |
|------|--------|
| **New school year** | Create new groups, archive old |
| **Student joins** | Add to appropriate group |
| **Student leaves** | Remove from group |
| **Class changes** | Update group membership |

---

## Common Group Structures

### By Grade/Year

```
├── 7th Grade
│   ├── 7th Grade Section A
│   ├── 7th Grade Section B
│   └── 7th Grade Section C
├── 8th Grade
│   ├── 8th Grade Section A
│   └── 8th Grade Section B
```

### By Subject/Course

```
├── Spanish Program
│   ├── Spanish Beginners
│   ├── Spanish Intermediate
│   └── Spanish Advanced
├── Math Program
│   ├── Math Standard
│   └── Math Advanced
```

### By Activity

```
├── Extracurricular
│   ├── Science Club
│   ├── Debate Team
│   └── Art Workshop
```

---

## Troubleshooting

### Students Can't See Course

Check:
1. ✅ Student is in a group
2. ✅ Group is assigned to the course
3. ✅ Course is activated
4. ✅ Lessons are activated

### Can't Delete Group

**Error: "Group has users"**
- Remove all members first
- Then try deleting again

### Wrong Students in Group

1. Review current members
2. Remove incorrect students
3. Add correct students
4. Verify course access

---

## Next Steps

- [Understanding Metrics](/docs/dashboard/metrics)
- [Using the AI Assistant](/docs/dashboard/ai-assistant)
- [School Settings](/docs/dashboard/school-settings)

