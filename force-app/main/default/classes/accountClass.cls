public with sharing class accountClass {
    @AuraEnabled
    public static List<Account> getAccountList(){

        return[select id, Name, Phone from Account limit 1000];
        
    }
}
