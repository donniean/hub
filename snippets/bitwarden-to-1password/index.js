const { resolve } = require('path');
const { readJsonSync, outputFileSync } = require('fs-extra');

function get1PasswordJson({ filePath }) {
  const data = readJsonSync(filePath);
  const { items } = data;
  let loginList = [];

  items.forEach(item => {
    const { name, fields = [], login } = item;
    if (login) {
      const { uris, username, password } = login;
      const [{ uri }] = uris;
      let fieldsMap = {};
      if (fields.length > 0) {
        fields.forEach(field => {
          const { name, value } = field;
          fieldsMap[name] = value;
        });
      }
      loginList.push({
        title: name,
        website: uri,
        username,
        password,
        notes: '',
        ...fieldsMap
      });
    }
  });
  return { loginList };
}

// TODO: fields 未处理
function get1PasswordLoginCsv({ data }) {
  const rows = data.map(item => {
    const { title, website, username, password, notes } = item;
    return [title, website, username, password, notes].join(',');
  });
  return rows.join('\n');
}

const { loginList } = get1PasswordJson({ filePath: resolve('data.json') });
const csv = get1PasswordLoginCsv({ data: loginList });
outputFileSync('1password-login.csv', csv);
