import {Xml} from './xml';

const xml = new Xml();

describe('xml parser', () => {

	it('should return empty array when input is not defined', () => {
		expect(xml.read()).to.eql([]);
	});

	it('should return empty array when passed empty string', () => {
		expect(xml.read('')).to.eql([]);
	});
	it('should return array of one element', () => {
		const text = `<?xml version="1.0" encoding="UTF-8"?>
		<root>
			<row>
				<name>
					<first>Lue</first>
					<last>Laserna</last>
				</name>
				<gender>female</gender>
				<birthday>1983-09-18</birthday>
				<contact>
					<address>
						<street>19 Deer Loop</street>
						<zip>90732</zip>
						<city>San Pedro</city>
						<state>CA</state>
					</address>
					<email>lue.laserna@nosql-matters.org</email>
					<email>laserna@nosql-matters.org</email>
					<region>310</region>
					<phone>310-8268551</phone>
					<phone>310-7618427</phone>
				</contact>
				<likes>chatting</likes>
				<memberSince>2011-05-05</memberSince>
			</row>
		</root>`;
		const lines = xml.read(text);
		expect(lines.length).to.equal(1);
	});

	it('should return array of rows', () => {
		const text = `<?xml version="1.0" encoding="UTF-8"?>
		<root>
			<row>
				<name>
					<first>Lue</first>
					<last>Laserna</last>
				</name>
				<gender>female</gender>
				<birthday>1983-09-18</birthday>
				<contact>
					<address>
						<street>19 Deer Loop</street>
						<zip>90732</zip>
						<city>San Pedro</city>
						<state>CA</state>
					</address>
					<email>lue.laserna@nosql-matters.org</email>
					<email>laserna@nosql-matters.org</email>
					<region>310</region>
					<phone>310-8268551</phone>
					<phone>310-7618427</phone>
				</contact>
				<likes>chatting</likes>
				<memberSince>2011-05-05</memberSince>
			</row>
			<row>
				<name>
					<first>Jasper</first>
					<last>Grebel</last>
				</name>
				<gender>male</gender>
				<birthday>1989-04-29</birthday>
				<contact>
					<address>
						<street>19 Florida Loop</street>
						<zip>66840</zip>
						<city>Burns</city>
						<state>KS</state>
					</address>
					<email>jasper.grebel@nosql-matters.org</email>
					<region>316</region>
					<phone>316-2417120</phone>
					<phone>316-2767391</phone>
				</contact>
				<likes>shopping</likes>
				<memberSince>2011-11-10</memberSince>
			</row>
		</root>`;
		const lines = xml.read(text);
		expect(lines.length).to.equal(2);
		expect(lines[0].name.first).to.equal('Lue');
		expect(lines[1].contact.phone).to.eql(['316-2417120', '316-2767391']);
	});

	it('should create elements from attributes', () => {
		const text = `<?xml version="1.0" encoding="UTF-8"?>
		<root>
			<row jobTitle="manager">
				<name>
					<first>Lue</first>
					<last>Laserna</last>
				</name>
				<gender>female</gender>
				<birthday>1983-09-18</birthday>
				<contact>
					<address>
						<street>19 Deer Loop</street>
						<zip>90732</zip>
						<city>San Pedro</city>
						<state>CA</state>
					</address>
					<email>lue.laserna@nosql-matters.org</email>
					<email>laserna@nosql-matters.org</email>
					<region>310</region>
					<phone>310-8268551</phone>
					<phone>310-7618427</phone>
				</contact>
				<likes>chatting</likes>
				<memberSince>2011-05-05</memberSince>
			</row>
			<row likes="wakeboarding">
				<name>
					<first>Jasper</first>
					<last>Grebel</last>
				</name>
				<gender>male</gender>
				<birthday>1989-04-29</birthday>
				<contact email='test@email.com' phone='911'>
					<address>
						<street>19 Florida Loop</street>
						<zip>66840</zip>
						<city>Burns</city>
						<state>KS</state>
					</address>
					<email>jasper.grebel@nosql-matters.org</email>
					<region>316</region>
					<phone>316-2417120</phone>
					<phone>316-2767391</phone>
				</contact>
				<likes>shopping</likes>
				<memberSince>2011-11-10</memberSince>
			</row>
		</root>`;

		const lines = xml.read(text);
		expect(lines[0].jobTitle).to.equal('manager');
		expect(lines[1].contact.phone).to.eql(['316-2417120', '316-2767391', '911']);
		expect(lines[1].contact.email).to.eql(['jasper.grebel@nosql-matters.org', 'test@email.com']);
		expect(lines[1].likes).to.eql(['shopping', 'wakeboarding']);
	});
});