function checkout() {
  echo "\n"
  echo "checkout $1"
  git checkout main
  git pull --all
  git branch -D chore
  rm -rf node_modules/
  npm install
}

names=(
  collections
  configs
  next-app
  react-app
  styles
)

for name in ${names[@]}; do
  checkout $name
done

cd ~/Workspaces/collections
