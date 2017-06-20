import {Csv} from './csv';
const data = `Name First,Name Last,Gender,Birthday,Contact Address Street,Contact Address Zip,Contact Address City,Contact Address State,Contact Email,Contact Region,Contact Phone,Likes,Member Since
Lue,Laserna,female,1983-09-18,19 Deer Loop,90732,San Pedro,CA,"lue.laserna@nosql-matters.org,laserna@nosql-matters.org",310,"310-8268551,310-7618427",chatting,2011-05-05
Jasper,Grebel,male,1989-04-29,19 Florida Loop,66840,Burns,KS,jasper.grebel@nosql-matters.org,316,"316-2417120,316-2767391",shopping,2011-11-10
Kandra,Beichner,female,1963-11-21,6 John Run,98434,Tacoma,WA,"kandra.beichner@nosql-matters.org,kandra@nosql-matters.org",253,253-0405964,swimming,2012-03-18
Jeff,Schmith,male,1977-10-14,14 198th St,72569,Poughkeepsie,AR,jeff.schmith@nosql-matters.org,870,undefined,"chatting,boxing,reading",2011-02-10`;

const csv = new Csv();
const rows = csv.read(data);

const output = [
	{
		0: "Name First",
		1: "Name Last",
		2: "Gender",
		3: "Birthday",
		4: "Contact Address Street",
		5: "Contact Address Zip",
		6: "Contact Address City",
		7: "Contact Address State",
		8: "Contact Email",
		9: "Contact Region",
		10: "Contact Phone",
		11: "Likes",
		12: "Member Since"
	},
	{
		0: "Lue",
		1: "Laserna",
		2: "female",
		3: "1983-09-18",
		4: "19 Deer Loop",
		5: "90732",
		6: "San Pedro",
		7: "CA",
		8: "lue.laserna@nosql-matters.org,laserna@nosql-matters.org",
		9: "310",
		10: "310-8268551,310-7618427",
		11: "chatting",
		12: "2011-05-05"
	},
	{
		0: "Jasper",
		1: "Grebel",
		2: "male",
		3: "1989-04-29",
		4: "19 Florida Loop",
		5: "66840",
		6: "Burns",
		7: "KS",
		8: "jasper.grebel@nosql-matters.org",
		9: "316",
		10: "316-2417120,316-2767391",
		11: "shopping",
		12: "2011-11-10"
	},
	{
		0: "Kandra",
		1: "Beichner",
		2: "female",
		3: "1963-11-21",
		4: "6 John Run",
		5: "98434",
		6: "Tacoma",
		7: "WA",
		8: "kandra.beichner@nosql-matters.org,kandra@nosql-matters.org",
		9: "253",
		10: "253-0405964",
		11: "swimming",
		12: "2012-03-18"
	},
	{
		0: "Jeff",
		1: "Schmith",
		2: "male",
		3: "1977-10-14",
		4: "14 198th St",
		5: "72569",
		6: "Poughkeepsie",
		7: "AR",
		8: "jeff.schmith@nosql-matters.org",
		9: "870",
		10: "undefined",
		11: "chatting,boxing,reading",
		12: "2011-02-10"
	}
];


describe('Csv import', () => {
	it('should be equal', () => {
		expect(rows).to.eql(output);
	});
});