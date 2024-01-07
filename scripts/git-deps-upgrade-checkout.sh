function checkout() {
  echo "\n"
  echo "checkout $1"
  echo ""
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
  react-app
  styles
)

for name in ${names[@]}; do
  checkout $name
done

cd ~/Workspaces/collections
