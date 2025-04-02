function getCommands(start: number, end: number) {
  const command = `git fetch --depth`;
  const commands: string[] = [];

  for (let i = start; i < end; i++) {
    const echo = `echo ${i}`;
    const finalCommand = `${command} ${i}`;
    commands.push(echo, finalCommand);
  }

  const res = commands.join('\n');
  console.log(res);
}

getCommands(101, 1000);
