#!/usr/bin/env node

import { sayWelcomeAndHelloName } from '..';
import gameEven from '../games/even';


// greeting user
sayWelcomeAndHelloName('Answer "yes" if number even otherwise answer "no".');

// game. ask user is number even
gameEven();
