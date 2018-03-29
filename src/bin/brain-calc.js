#!/usr/bin/env node

import { sayWelcomeAndHelloName } from '..';
import gameCalc from '../games/calc';

// greeting user
sayWelcomeAndHelloName('What is the result of the expression?');

// game. calculator
gameCalc();
