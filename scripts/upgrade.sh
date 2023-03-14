basePath=$(cd "$(dirname "$0")" || exit;pwd)

source "${basePath}"/brew-upgrade.sh

source "${basePath}"/oh-my-zsh-plugins-upgrade.sh

source "${basePath}"/npm-global-upgrade.sh
