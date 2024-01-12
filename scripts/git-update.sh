update() {
  echo "\n"
  echo "cd ~/Workspaces/$1 && git checkout main && git pull --all --prune"
  echo ""
  cd ~/Workspaces/"$1" && git checkout main && git pull --all --prune
}

names=(
  collections
  configs
  next-app
  private
  react-app
  styles
)

for name in "${names[@]}"; do
  update "$name"
done

cd ~/Workspaces/collections || exit
