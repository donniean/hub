function update() {
  echo "cd ~/Workspaces/$1 && git checkout main && git pull --all\n"
  cd ~/Workspaces/$1 && git checkout main && git pull --all
}

names=(
  collections
  configs
  next-app
  private
  react-app
  styles
)

for name in ${names[@]}; do
  update $name
done

cd ~/Workspaces/collections
