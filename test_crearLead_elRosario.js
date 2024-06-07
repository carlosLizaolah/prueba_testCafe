//Crear Lead El Rosario test

import {Selector} from 'testcafe';
import NewLead from './newLeadPage';


fixture('El Rosario').page('https://aplatamqa.com/portal-alumno/login?schoolId=36');

test('Crear lead', async t => {

	await NewLead.createLead('prueba240517002@prueba.com', 'Test.123', 'Test.123', 'Prueba', 'Prueba', '6016014567');

});
