// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define colours
const black = '#222';
const red = '#e74c3c';

// Define options for Boxen
const options = {
  padding: 1,
  margin: 0,
  align: 'center',
  borderColor: red,
  borderStyle: 'double',
  backgroundColor: black,
  float: 'center',
}

// Define text colorus
const n = chalk.white.bold; // name
const t = chalk.white; // text
const h = t.bold; //heading
const w = t.hex(red).bold; // website
const l = t // link text
const u = w; // username

const output = `
  ${n('Alex Howes')}
  ${w('https://alexhowes.co.uk')}

  ${t('Freelance Web Developer and Web Developer at Creasis Ltd')}

  ${h('    Github:')}  ${l('https://github.com/')}${u('aihowes')}    
  ${h('  Twitter:')}  ${l('https://twitter.com/')}${u('aihowes')}   
  ${h('Instagram:')}  ${l('https://instagram.com/')}${u('aihowes')}
  ${h('  YouTube:')}  ${l('https://youtube.com/c/')}${u('aihowes')}
  ${h('  LinkedIn:')}  ${l('https://linkedin.com/in/')}${u('aihowes')}
`;

console.log(boxen(output, options));