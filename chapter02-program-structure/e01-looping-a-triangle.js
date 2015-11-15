var line = '#';
for (var i = 0; i < 7; i++) {
    console.log(line);
    line += '#';
}

// Another take
line = '#';
while (line.length <= 7) {
    console.log(line);
    line += '#';
}
