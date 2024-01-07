function checkout() {
  git checkout main
  git branch -D chore
  git pull --all
  rm -rf node_modules/
  npm install
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
  checkout $name
done

cd ~/Workspaces/collections
