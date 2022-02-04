import { agent } from "./veramo/setup";

const someDID = "did:ethr:rinkeby:0x03f5b5e678f0e945936ff5c9fbada1e17df1690bea7e7acecce05fdccb6a674f86"

async function main(credentialSubjectDID: string, delegatedToDID: string, issuerDID: string, scopes?: string[]) {

    const credential = await agent.createVerifiableCredential({
        credential: {
            '@context': ['https://www.w3.org/2018/credentials/v1', 'https://www.symfoni.dev/credentials/v1'],
            type: ['VerifiableCredential', 'AccessVC'],
            credentialSubject: {
                id: credentialSubjectDID,
                access: {
                    delegatedTo: {
                        id: delegatedToDID,
                    },
                    scopes: scopes,
                },
            },
            issuer: {
                id: issuerDID,
            },
        },
        proofFormat: 'jwt',
    })
    console.log(`New credential created`)
    console.log(credential)
}

main(someDID, someDID, someDID).catch(console.log);