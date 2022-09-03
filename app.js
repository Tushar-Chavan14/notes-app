// yargs do not suppurt ES6 as of now
const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.0");

//command for adding note

yargs.command({
  command: "add",
  describe: "adds a note",
  builder: {
    t: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "the body of note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addnotes(argv.t, argv.body);
  },
});

//command for removing note

yargs.command({
  command: "rem",
  describe: "removes a note",
  builder: {
    t: {
      discribe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removenotes(argv.t);
  },
});

//command for listing notes

yargs.command({
  command: "list",
  describe: "lists all notes",
  handler: () => {
    notes.listnotes();
  },
});

//command to read notes

yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    t: {
      discribe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readnote(argv.t);
  },
});

yargs.parse();
