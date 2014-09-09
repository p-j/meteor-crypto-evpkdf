Package.describe({
  summary: 'EvpKDF Package for CryptoJS, standard secure algorithms',
  version: '3.1.2',
  git: 'https://github.com/p-j/meteor-crypto-EvpKDF.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use([
    'jparker:crypto-core@3.1.2',
    'jparker:crypto-md5@3.1.2'
  ], ['client', 'server']);

	api.imply([
    'jparker:crypto-core',
    'jparker:crypto-md5'
  ], ['client', 'server']);

  api.addFiles(['lib/evpkdf.js']);
});

Package.onTest(function (api) {
	api.use([
		'jparker:crypto-core@3.1.2',
		'jparker:crypto-md5@3.1.2',
		'tinytest'
	], ['client', 'server']);

	api.addFiles('tests/tests.js', ['client', 'server']);
});
