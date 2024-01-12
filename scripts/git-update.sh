update() {
  echo "\n"
  echo "cd ~/Workspaces/$1 && git checkout main && git pull --all"
  echo ""
  cd ~/Workspaces/"$1" && git checkout main && git pull --all
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
  update "$name" &
done

wait

cd ~/Workspaces/collections || exit
