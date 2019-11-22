// The Model of the RIB Client
export class Client {
    statut: string;
    operations: {
         RIB: any,
         Date: any,
         Libelle: any,
         Montant: any,
         Devise: any
       }[];
}
