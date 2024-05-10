import {defineConfig} from "cypress";
import * as path from "path";
import * as fs from "fs";
import axios from "axios";

export default defineConfig({
	e2e: {
		baseUrl: "https://chinamobil.ru/eng",
		setupNodeEvents(on, config) {
			on('task', {
				downloadImage({imageUrl, manufactureTitle, modelTitle}) {
					manufactureTitle = manufactureTitle.replace(/\s/g, "_");
					modelTitle = modelTitle.replace(/\s/g, "_")
					return axios({
						method: 'get',
						url: imageUrl,
						responseType: 'stream'
					}).then(response => {
						const filename = path.basename(new URL(imageUrl).pathname);
						console.log("--------------->", filename);
						const outputPath = `./downloads/photos/${manufactureTitle}/${modelTitle}/${filename}`;
						const writer = fs.createWriteStream(outputPath);
						response.data.pipe(writer);
						return new Promise((resolve, reject) => {
							writer.on('finish', () => {
								resolve(`Saved original image as ${outputPath}`);
							});
							writer.on('error', reject);
						});
					});
				}
			});
		},
	},
});
