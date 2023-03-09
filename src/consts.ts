export const enum Component {
    Display = 'display',
    Operators = 'operators',
    Numbers = 'numbers',
    Submit = 'submit',
}

export const enum Mode {
    Runtime = 'Runtime',
    Constructor = 'Constructor'
}

export const NO_DRAGGABLE = [Component.Display];

export const symbols = [
    { symbol: '7' },
    { symbol: '8' },
    { symbol: '9' },
    { symbol: '4' },
    { symbol: '5' },
    { symbol: '6' },
    { symbol: '1' },
    { symbol: '2' },
    { symbol: '3' },
    { symbol: '0' },
    { symbol: ',' }
];

export const operators = [
    { operator: '/' },
    { operator: 'x' },
    { operator: '-' },
    { operator: '+' },
];