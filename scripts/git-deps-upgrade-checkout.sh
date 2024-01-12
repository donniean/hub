checkout() {
  echo "checkout $1"
  echo ""
  cd ~/Workspaces/"$1" || exit
  git checkout main
  git branch -D chore
  git pull --all --prune
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

for name in "${names[@]}"; do
  checkout "$name" &
done

wait

cd ~/Workspaces/collections || exit
