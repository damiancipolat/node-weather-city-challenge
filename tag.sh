#Extract project field name package.json
export PACKAGE_NAME="$(cat package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g')"

#Extract version field from package.json
export PACKAGE_VERSION="$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g')"

#Set the package tag name
export PACKAGE_TAG="$(echo ${PACKAGE_NAME}:${PACKAGE_VERSION} | tr -d ' ')"