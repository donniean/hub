function pr() {
  echo "\n"
  echo "upgrading $1"
  git checkout -b chore
  ncu -u
  rm -rf node_modules
  rm package-lock.json
  npm install
  git commit -a -m 'chore: upgrade dependencies' && git push --set-upstream origin chore
  open "https://github.com/donniean/$1/compare/main...chore"
}

names=(
  collections
  configs
  next-app
  react-app
  styles
)

for name in ${names[@]}; do
  pr $name
done

cd ~/Workspaces/collections
