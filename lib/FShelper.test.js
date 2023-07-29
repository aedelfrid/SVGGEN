const mock = require('mock-fs')

const writeFile = require('./FShelper')

describe('writes given data to a new file', () => {
    beforeAll(
        () => {
            mock({
                'lib': {
                    'test.svg': 
                    `<svg viewBox='0 0 100px 100px' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle cx='50' cy='50' r="50"  fill="green"/>
                        <text font-size='30px' text-anchor="middle" x='50' y='60' fill='white'>SVG</text>
                    </svg>`
                }
            });
        },
    );
    
    it('writes to file', () => {
        const data =  `
            <svg viewBox='0 0 100px 100px' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle cx='50' cy='50' r="50"  fill="green"/>
                <text font-size='30px' text-anchor="middle" x='50' y='60' fill='white'>SVG</text>
            </svg>
        `;
        
        expect(() => {
            
            const file = `./lib/`


        }

        
        );
    })
})