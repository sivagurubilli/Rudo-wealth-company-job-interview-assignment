const program = require("commander")

const {
    cruisers,customers
} = require("./index")


program.version("1.0.0").description("cruisers program")

program.command("list").alias("l").description("find a cruisers")
.action(cruisers())
program.command("list").alias("l").description("find a cruisers")
.action(customers())
program.parse(process.argv)