/**
 * Author:
 * Date:
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const bakePie = require('../src/pie');

describe('bakePie', () => {
    it('should successfully bake a pie with all essential ingredients', () => {
        const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']);
        expect(result).toBe('Successfully baked a apple pie!');
    });

    it('should fail to bake a pie if flour is missing', () => {
        const exitMock = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.warn = jest.fn();

        bakePie('apple', ['sugar', 'butter', 'apples']);

        expect(console.warn).toHaveBeenCalledWith('Missing ingredients: flour');
        expect(exitMock).toHaveBeenCalledWith(1);

        exitMock.mockRestore();
    });

    it('should fail to bake a pie if sugar is missing', () => {
        const exitMock = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.warn = jest.fn();

        bakePie('apple', ['flour', 'butter', 'apples']);

        expect(console.warn).toHaveBeenCalledWith('Missing ingredients: sugar');
        expect(exitMock).toHaveBeenCalledWith(1);

        exitMock.mockRestore();
    });

    it('should fail to bake a pie if butter is missing', () => {
        const exitMock = jest.spyOn(process, 'exit').mockImplementation(() => {});
        console.warn = jest.fn();

        bakePie('apple', ['flour', 'sugar', 'apples']);

        expect(console.warn).toHaveBeenCalledWith('Missing ingredients: butter');
        expect(exitMock).toHaveBeenCalledWith(1);

        exitMock.mockRestore();
    });
});