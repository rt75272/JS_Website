# ---------------------------------------
# Makefile Automation
#
# 
# Quick Makefile to run JS examples via
# node.js. Also aids with pushing code 
# via git.
#
# Cause a bit of make automation fun is 
# needed for no reason other than my own
# entertainment. 
#
# Standard usage:
#	$ make
#
# Git push usage:
#	$ make push msg="commit message"
# ---------------------------------------

# Main
# Calls ready, then calls fire.
all: ready fire

# Makes the fire.sh bash script executable.
ready:
	chmod +x fire.sh

# Runs the fire.sh bash script.
fire:
	sh fire.sh

# Display git push help.
githelp:
	@echo "Git Makefile\n"
	git status
	@echo
	@echo To push to Github:
	@echo '    make push msg="enter git commit message"'
	@echo

# Do a git push with a given commit message.
# 
# NOTE:
# 	If access keeps keep getting denied, hit the backspace key several times
# 	before entering credentials.
#	This is a bug to be fixed.
push:
	echo "Checking for untracked changes..."
	git pull
	echo "Starting new git push"
	@git status
	@git add .
	git commit -m "$(msg)"
	@git status
	@git push
