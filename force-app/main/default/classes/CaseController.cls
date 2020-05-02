public with sharing class CaseController {
    public CaseController() {
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCases(String subject){
        
        String key = '%' +subject+ '%';

        List<Case> caseList = [Select Id, Subject, Description, Status, Origin FROM Case where Subject Like: key];
        return caselist;
    }

}
