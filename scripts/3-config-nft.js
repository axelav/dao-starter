import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'

const bundleDrop = sdk.getBundleDropModule(
  '0x8E8Eb8Fa8556de96f654c432750A036C6931b494'
)

;(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Enjoy the rocks ;)',
        description: 'This NFT will give you access to dDAO!',
        image: readFileSync('scripts/assets/nft.jpg'),
      },
    ])
    console.log('✅ Successfully created a new NFT in the drop!')
  } catch (error) {
    console.error('failed to create the new NFT', error)
  }
})()
