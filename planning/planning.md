# Planning

## User Story

AS a freelance web developer
  
I WANT to generate a simple logo for my projects
  
SO THAT I don't have to pay a graphic designer
  

## Acceptance Criteria

GIVEN a command-line application that accepts user input
  
WHEN I am prompted for text
  
THEN I can enter up to three characters
  
WHEN I am prompted for the text color
  
THEN I can enter a color keyword (OR a hexadecimal number)
  
WHEN I am prompted for a shape
  
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
  
WHEN I am prompted for the shape's color
  
THEN I can enter a color keyword (OR a hexadecimal number)
  
WHEN I have entered input for all the prompts
  
THEN an SVG file is created named `logo.svg`
  
AND the output text "Generated logo.svg" is printed in the command line
  
WHEN I open the `logo.svg` file in a browser
  
THEN I am shown a 300x200 pixel image that matches the criteria I entered
  
## Mock-Up

<img src='./10-oop-homework-demo.png'>

## Steps

### Install dependencies

    - Jest
    - FS
    - Inquirer

### Tests

### SVG Generation

    - Template each shape // using classes?
    - Prompt for shape
    - Prompt for text, up to 3 characters
    - colour input (keyword or hex code)
    - FS creates a file called logo.svg
    - output logo.svg to console log

### Inquirer

    - Prompt for shape
    - Prompt for text
    - prompt for colour

### README
