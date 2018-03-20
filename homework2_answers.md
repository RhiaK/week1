What command do you use to setup a git repository inside of your folder?
	git remote add origin https://.........

What command do you use to ask git to start tracking a file?
	git add .

What command do you use to ask git to move your file from the staging area to the repository? 
	git commit -m "message here"

What command do you use to pull any changes from the master repository into your local repository?
	git pull origin master

What command do you use to unstage a file?
	git rm --cached (file to unstage)

What command do you use to change your files back to how they were after a commit?
	git reset head(or other location) --hard

Why is it important to use -- when changing files back to a previous state?
	We must specify whether it is a soft or hard reset.

Why might you want to reset your files back to a previous commit?
	To go back to a time when you know it functioned as it should.


What command do you use to create a branch?
	git branch (name of new branch)

What command do you use to use a different branch?
	git checkout (name of branch to go to)

Why would you want to use a branch other than the default master?
	So that you may make changes without it affecting the main code, or others might.

Give an example for when you would use git merge and give an example for when it would be better to submit a pull request to have your branch merged
	A merge would be used when working on something, possibly with others, and you want to combine multiple parts of code that you control. A pull request would be in a situation where you do not control the main code but have code to add to it.

What command do you use to send all of the work that you've done locally to your remote repository?
	git push origin master



