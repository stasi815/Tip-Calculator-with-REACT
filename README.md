## Tip Calculator 

Built with React in JavaScript and JSX

## Dockerfile

The Dockerfile is used to connect to my CapRover server through DigitalOcean

## Build

`docker build -t tipcalc:dev .`

## Run

`$ docker run \`
    `-it \`
    `--rm \`
    `-v ${PWD}:/app \`
    `-v /app/node_modules \`
    `-p 3001:3000 \`
    `-e CHOKIDAR_USEPOLLING=true \`
    `tipcalc:dev `


## Learn More

You can learn more in the [DigitalOcean documentation](https://www.digitalocean.com/docs/droplets/).

To learn about CapRover, check out the [CapRover documentation](https://caprover.com/docs/get-started.html).


