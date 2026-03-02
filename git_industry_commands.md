
1️⃣ GIT CONFIGURATION COMMANDS


1. git config --global user.name
Syntax:
git config --global user.name "Your Name"
Purpose:
Sets your username globally for all repositories.
Example:
git config --global user.name "Sowmya"

2. git config --global user.email
Syntax:
git config --global user.email "yourmail@gmail.com"
Purpose:
Sets your email globally.
Example:
git config --global user.email "sowmya@gmail.com"

3. git config --list
Syntax:
git config --list
Purpose:
Displays all Git configuration settings.
Example:
git config --list

4. git config --unset
Syntax:
git config --unset user.name
Purpose:
Removes a configuration value.
Example:
git config --unset user.name


2️⃣ REPOSITORY SETUP COMMANDS

1. git init
Syntax:
git init
Purpose:
Initializes a new Git repository.
Example:
git init

2. git clone
Syntax:
git clone <repository-url>
Purpose:
Copies a remote repository to local machine.
Example:
git clone https://github.com/username/MyRestaurant.git

3. git clone --branch
Syntax:
git clone --branch branch-name <repo-url>
Purpose:
Clones a specific branch.
Example:
git clone --branch main https://github.com/username/MyRestaurant.git

4. git clone --depth
Syntax:
git clone --depth 1 <repo-url>
Purpose:
Shallow clone (latest commit only).
Example:
git clone --depth 1 https://github.com/username/MyRestaurant.git


3️⃣ REPOSITORY STATUS & INSPECTION


1. git status
Syntax:
git status
Purpose:
Shows current file status.
Example:
git status

2. git log
Syntax:
git log
Purpose:
Shows commit history.
Example:
git log

3. git log --oneline
Syntax:
git log --oneline
Purpose:
Shows short commit history.
Example:
git log --oneline

4. git log --graph
Syntax:
git log --graph
Purpose:
Shows branch structure visually.
Example:
git log --graph

5. git show
Syntax:
git show
Purpose:
Displays detailed commit information.
Example:
git show

6. git diff
Syntax:
git diff
Purpose:
Shows unstaged changes.
Example:
git diff

7. git diff --staged
Syntax:
git diff --staged
Purpose:
Shows staged changes.
Example:
git diff --staged

8. git blame filename
Syntax:
git blame filename
Purpose:
Shows who modified each line.
Example:
git blame index.html

9. git reflog
Syntax:
git reflog
Purpose:
Shows reference history.
Example:
git reflog

10. git shortlog
Syntax:
git shortlog
Purpose:
Shows commit summary by author.
Example:
git shortlog

4️⃣ FILE TRACKING COMMANDS

1. git add
Syntax:
git add filename
Purpose:
Adds file to staging area.
Example:
git add index.html

2. git add .
Syntax:
git add .
Purpose:
Adds all files.
Example:
git add .

3. git add -p
Syntax:
git add -p
Purpose:
Adds changes partially.
Example:
git add -p

4. git restore
Syntax:
git restore filename
Purpose:
Restores file changes.
Example:
git restore index.html

5. git restore --staged
Syntax:
git restore --staged filename
Purpose:
Unstages file.
Example:
git restore --staged index.html

6. git rm
Syntax:
git rm filename
Purpose:
Removes file.
Example:
git rm test.txt

7. git mv
Syntax:
git mv old new
Purpose:
Renames file.
Example:
git mv old.txt new.txt

5️⃣ BRANCH MANAGEMENT COMMANDS


1. git branch
Syntax:
git branch
Purpose:
Lists local branches.
Example:
git branch

2. git branch branch-name
Syntax:
git branch feature-login
Purpose:
Creates branch.
Example:
git branch feature-login

3. git branch -a
Syntax:
git branch -a
Purpose:
Shows all branches.
Example:
git branch -a

4. git branch -d branch-name
Syntax:
git branch -d feature-login
Purpose:
Deletes merged branch.
Example:
git branch -d feature-login

5. git branch -D branch-name
Syntax:
git branch -D feature-login
Purpose:
Force deletes branch.
Example:
git branch -D feature-login

6. git checkout branch-name
Syntax:
git checkout main
Purpose:
Switch branch.
Example:
git checkout main

7. git checkout -b new-branch
Syntax:
git checkout -b feature-cart
Purpose:
Create & switch branch.
Example:
git checkout -b feature-cart

8. git switch branch-name
Syntax:
git switch main
Purpose:
Switch branch (modern).
Example:
git switch main

9. git switch -c new-branch
Syntax:
git switch -c feature-ui
Purpose:
Create & switch branch.
Example:
git switch -c feature-ui



6️⃣ MERGE COMMANDS

1. git merge branch-name
Syntax:
git merge feature-login
Purpose:
Merges branch.
Example:
git merge feature-login

2. git merge --no-ff branch-name
Syntax:
git merge --no-ff feature-login
Purpose:
Forces merge commit.
Example:
git merge --no-ff feature-login



7️⃣ REMOTE COMMANDS


1. git remote
Syntax:
git remote
Purpose:
Lists remote names.
Example:
git remote

2. git remote -v
Syntax:
git remote -v
Purpose:
Shows remote URLs.
Example:
git remote -v

3. git remote add
Syntax:
git remote add origin <url>
Purpose:
Adds remote repository.
Example:
git remote add origin https://github.com/username/MyRestaurant.git

4. git remote remove
Syntax:
git remote remove origin
Purpose:
Removes remote.
Example:
git remote remove origin

5. git fetch
Syntax:
git fetch origin
Purpose:
Downloads updates.
Example:
git fetch origin

6. git pull
Syntax:
git pull origin main
Purpose:
Fetch + merge.
Example:
git pull origin main
7. git push
Syntax:
git push origin main
Purpose:
Push changes.
Example:
git push origin main
 git push
Syntax:
git push origin branch-name
Purpose:
Uploads your local commits to remote repository.
Example:
git push origin main
11. git push -u

Syntax:
git push -u origin branch-name
Purpose:
Pushes branch and sets upstream tracking
so future pushes can be done using just 'git push'.
Example:
git push -u origin main
12. git push --force
Syntax:
git push --force
Purpose:
Force pushes changes and overwrites remote history.
Example:
git push --force
13. git push --tags
Syntax:
git push origin --tags
Purpose:
Pushes all tags to remote repository.
Example:
git push origin --tag
8️⃣ STASH COMMANDS
1. git stash
Syntax:
git stash
Purpose:
Temporarily saves your uncommitted changes 
so you can switch branches without committing.
Example:
git stash

2. git stash list
Syntax:
git stash list
Purpose:
Displays all saved stash entries.
Example:
git stash list
3. git stash pop
Syntax:
git stash pop
Purpose:
Applies the latest stash and removes it 
from the stash list.
Example:
git stash pop
4. git stash apply
Syntax:
git stash apply
Purpose:
Applies a saved stash but keeps it in the stash list.
Example:
git stash apply
5. git stash drop
Syntax:
git stash drop stash@{0}
Purpose:
Deletes a specific stash entry.
Example:
git stash drop stash@{0}
6. git stash clear
Syntax:
git stash clear
Purpose:
Deletes all stash entries permanently.
Example:
git stash clear


9️⃣ RESET & UNDO COMMANDS

1. git reset
Syntax:
git reset HEAD~1
Purpose:
Moves the branch pointer back to a previous commit.
Example:
git reset HEAD~1

2. git reset --soft
Syntax:
git reset --soft HEAD~1
Purpose:
Moves HEAD back but keeps changes staged.
Example:
git reset --soft HEAD~1

3. git reset --mixed
Syntax:
git reset --mixed HEAD~1
Purpose:
Moves HEAD back and unstages changes (default).
Example:
git reset --mixed HEAD~1

4. git reset --hard
Syntax:
git reset --hard HEAD~1
Purpose:
Deletes commits and changes permanently.
Example:
git reset --hard HEAD~1
5. git revert
Syntax:
git revert commit-id
Purpose:
Creates a new commit that undoes changes 
from a previous commit.
Example:
git revert a1b2c3d
6. git clean -f
Syntax:
git clean -f
Purpose:
Removes untracked files.
Example:
git clean -f
7. git clean -fd
Syntax:
git clean -fd
Purpose:
Removes untracked files and directories.
Example:
git clean -fd


1️⃣0️⃣ REBASE COMMANDS

1. git rebase
Syntax:
git rebase branch-name
Purpose:
Reapplies commits from one branch onto another branch.
Example:
git rebase main

2. git rebase -i
Syntax:
git rebase -i HEAD~3
Purpose:
Interactive rebase to edit, squash, or reorder commits.
Example:
git rebase -i HEAD~3

3. git rebase --continue
Syntax:
git rebase --continue
Purpose:
Continues rebase after resolving conflicts.
Example:
git rebase --continue

4. git rebase --abort
Syntax:
git rebase --abort
Purpose:
Cancels the rebase process and restores original state.
Example:
git rebase --abort



1️⃣1️⃣ CHERRY PICK & PATCH COMMANDS
1. git cherry-pick
Syntax:
git cherry-pick commit-id
Purpose:
Applies a specific commit from another branch.
Example:
git cherry-pick a1b2c3d


2. git format-patch
Syntax:
git format-patch -1
Purpose:
Creates a patch file from a commit.
Example:
git format-patch -1 HEAD


3. git apply
Syntax:
git apply file.patch
Purpose:
Applies changes from a patch file without committing.
Example:
git apply 0001-update.patch


4. git am
Syntax:
git am file.patch
Purpose:
Applies patch file and creates a commit.
Example:
git am 0001-update.patch



1️⃣2️⃣ TAGGING COMMANDS
1. git tag
Syntax:
git tag
Purpose:
Lists all tags in repository.
Example:
git tag


2. git tag -a
Syntax:
git tag -a v1.0 -m "message"
Purpose:
Creates an annotated tag with message.
Example:
git tag -a v1.0 -m "First release"


3. git tag -d
Syntax:
git tag -d v1.0
Purpose:
Deletes a tag locally.
Example:
git tag -d v1.0
4. git push origin --tags
Syntax:
git push origin --tags
Purpose:
Pushes all tags to remote repository.
Example:
git push origin --tags



1️⃣3️⃣ SUBMODULE COMMANDS
1. git submodule add
Syntax:
git submodule add <repository-url>

Purpose:
Adds another Git repository inside your project.

Example:
git submodule add https://github.com/user/library.git


2. git submodule init
Syntax:
git submodule init
Purpose:
Initializes submodule configuration.
Example:
git submodule init
3. git submodule update
Syntax:
git submodule update
Purpose:
Downloads submodule content.
Example:
git submodule update



1️⃣4️⃣ DEBUGGING COMMANDS
1. git bisect
Syntax:
git bisect start
Purpose:
Helps find which commit introduced a bug 
using binary search.
Example:
git bisect start


2. git bisect good
Syntax:
git bisect good
Purpose:
Marks current commit as good (no bug).
Example:
git bisect good


3. git bisect bad
Syntax:
git bisect bad
Purpose:
Marks current commit as bad (contains bug).
Example:
git bisect bad


4. git bisect reset
Syntax:
git bisect reset

Purpose:
Stops bisect process.

Example:
git bisect reset


5. git fsck
Syntax:
git fsck
Purpose:
Checks repository for errors.
Example:
git fsck


6. git gc

Syntax:
git gc

Purpose:
Cleans unnecessary files and optimizes repository.

Example:
git gc
#commit commands
1. git commit -m
Syntax:
git commit -m "message"

Purpose:
Saves staged changes permanently.

Example:
git commit -m "Added login feature"


2. git commit -a -m
Syntax:
git commit -a -m "message"
Purpose:
Stages and commits modified tracked files.
Example:
git commit -a -m "Updated UI"


3. git commit --amend

Syntax:
git commit --amend

Purpose:
Edits the last commit.

Example:
git commit --amend


4. git commit --allow-empty
Syntax:
git commit --allow-empty -m "message"

Purpose:
Creates an empty commit.

Example:
git commit --allow-empty -m "Trigger deployment"
