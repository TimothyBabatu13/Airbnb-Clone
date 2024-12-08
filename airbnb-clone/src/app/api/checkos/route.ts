
import os from 'node:os'
export const GET = () => {
    return new Response(JSON.stringify(os.platform() === 'android'))
}