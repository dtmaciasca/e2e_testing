# PlayWright

Playwright al igual que Puppeteer, es una herramienta de automatización. A diferencia de Puppeteer, Playwright automatiza navegadores basados en Chromium, Firefox y WebKit a través de una única API.  
Playwright fue creado por el mismo equipo que creó Puppeteer. Su objetivo es mejorar las pruebas automatizadas de UI.

**Ventajas:**
* APIs más amigables. 
* Compatible con los navegadores de Chromium, WebKit, Firefox and Edge.
* A través de BrowserContext como servicio intentan que PlayWright sea nativo en la nube. 
* Permiten una migración sencilla entre Puppeteer y Playwright. 
* Es una alternativa a WebDriver, el estándar actual del W3C para automatización y pruebas web. Con esto, esperan dar soporte a las PWA y generar mayor confiabilidad en las pruebas. 
* Playwright admite versiones anteriores de Chromium, y planea sincronizar su npm ciclo de lanzamiento con los lanzamientos de canales estables de Chromium. 
* Playwright admite cada motor de navegador en Windows, macOS y Linux.  
* Reduce la necesidad de tiempos de espera.
* Mejor detección de la visibilidad del elemento antes de la interacción.

Por el momento Playwright se encuentra actualmente en una versión 0.9.x, con una versión estable 1.0 prevista para 2020.

**Desventajas:**
* Puppeteer es el proyecto más establecido en este momento. Aun se esta trabajando en el desarrollo de PlayWright y esperan sacar una versión estable en el 2020.
* El funcionamiento de slowMo puede ser temperamental, comparado con Puppeteer, si este se configura demasiado alto, las pruebas a menudo fallan. La consistencia de slowMo también parece variar de un navegador a otro.


| | Cypress | Protractor | Puppeteer | PlayWright |
|--|--|----|-----|----|
|Interfaz gráfica | Sí | No | No | No |
| Generador de configuración | Sí  | Sí (Con angular CLI)  | No | No |
|Locators para AngularJS | No  | Sí  | No  | No |
|Integración con Test frameworks |No, interno (sintaxis jasmine) |Jasmine, Mocha, Cucumber |Principalmente todos |Chai, Mocha, Jasmine, Jest, Cucumber |
|Sistemas operativos | Mac, Linux  | Mac, Linux, Windows  | Mac, Linux, Windows  | Mac, Linux, Windows |
|Grabación de pruebas| Sí  | No  | No  | Screenshots |
|Selenium backend | No  | Sí  | No  | No |
|Time-traveling | Sí  | No  | No  | No |
|Open source | Sí | Sí, diseñado específicamente para aplicaciones web AngularJS.| Sí | Sí |
|Debuggability|Sí|Sí|Sí|Sí|

