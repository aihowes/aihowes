#!/usr/bin/env node

import chalk from 'chalk';
import boxen, { Options } from 'boxen';

const black = '#222';
const blue = '#3289E5';

const options: Options = {
    padding: 1,
    margin: 0,
    align: 'center',
    borderColor: blue,
    borderStyle: 'round',
    backgroundColor: black,
    float: 'center',
};

// Define text colorus
const styleName = chalk.white.bold; // name
const styleText = chalk.white; // text
const styleHeading = styleText.bold; // heading
const styleWebsite = styleText.hex(blue).bold; // website
const styleLink = styleText; // link text
const styleUsername = styleWebsite; // username
const links = [
  {
    name: 'Github',
    url: 'https://github.com',
    username: 'aihowes',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    username: 'aihowes',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    username: 'aihowes',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/c',
    username: 'aihowes',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in',
    username: 'aihowes',
  },
];
// const nameWidth = links.reduce((acc, { name }) => {
//   return name.length > acc ? name.length : acc;
// }, 0) + 1; // add 1 for the colon separator

const longestRight = links.reduce((acc, { url, username }) => {
  const rightLength = url.length + username.length + 1;
  return rightLength > acc ? rightLength : acc;
}, 0);

const longestLeft = links.reduce((acc, { name }) => {
  const leftLength = name.length + 1;
  return leftLength > acc ? leftLength : acc;
}, 0);

const output = `
${styleName('Alex Howes')}
${styleWebsite('https://alexhowes.co.uk')}

${styleText('Freelance Web Developer and Web Developer at Pixel Fridge')}

${links.map(({ name, url, username }) => {
  const paddingLeftLength = longestLeft - (name.length + 1);
  const paddingRightLength = longestRight - (url.length + username.length + 1);
  const leftPadding = ' '.repeat(paddingLeftLength);
  const rightPadding = ' '.repeat(paddingRightLength);
  const styledLinkText = `${leftPadding}${styleHeading(name)}: ${styleLink(url)}/${styleUsername(username)}${rightPadding}`;
  return styledLinkText;
}).join('\n')}
`;

console.log(boxen(output, options));
