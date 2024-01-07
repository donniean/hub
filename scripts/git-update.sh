# cd ~/Workspaces/collections && git checkout main && git pull --all

# cd ~/Workspaces/configs && git checkout main && git pull --all

# cd ~/Workspaces/next-app && git checkout main && git pull --all

# cd ~/Workspaces/private && git checkout main && git pull --all

# cd ~/Workspaces/react-app && git checkout main && git pull --all

# cd ~/Workspaces/styles && git checkout main && git pull --all

# cd ~/Workspaces/collections

function update() {
  echo "cd ~/Workspaces/$1 && git checkout main && git pull --all"
  cd ~/Workspaces/$1 && git checkout main && git pull --all
}

names=(collections configs next-app private react-app styles)

for name in ${names[@]}; do
  update $name
done

cd ~/Workspaces/collections
