// 缩进测试
export const indentTestCases = [
    `
1. \t\t
2. \t\t
\t1. \tsdasad
\t2. \tsadasddsasad
\t3. \tsdaasdsddasdsaadsasdsda
\t\t4. \tsadsddsasadsdasd
\t\t5. \t\tsdasddassddsasda
\t\t6. \t\tsdaasdssdasd
\t\t\t1. \tsdasasdsddsdsa
\t\t\t\t1. \tddssaasdsdasad
\t\t\t\t2. \tsdasddsasad
\t\t\t\t\t1. \tsaddsds
\t\t\t\t\t\t2. \tsaddsadsasaddas
\t\t\t\t\t\t\t3. \tsadsdsasddssasddssda
\t\t\t\t\t\t\t\t4. \tsadsaasdsaasd\t
\t\t\t\t\t\t\t\t\t5. \tsadssdaadsdsa
\t\t\t\t\t\t\t\t\t\t6. \tsadsadsdasaddas
\t\t\t\t\t\t\t\t\t\t\t7. \tsadadssdaasd
\t\t\t\t\t\t\t\t\t\t\t\t8. \tsaddsdasasddasdsaaaaaaaaaaaaaaaaaaaaa
\t\t\t\t\t\t\t\t\t\t\t\t\t9. \tsdadssaassadsadasddasasdsdasadsdaas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t10. \t\tsadsdsadasadda
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t11. \t\tsadsadasddssaadsasadasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t12. \t\tsdadsadsaasddas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t13. \t\tsadsadasasdsaddsasda
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14. \t\tsadssadsaasdsad
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t15. \t\tsadsaddsadasdsaasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t16. \t\tsaddsasdasdsa
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t17. \t\tsdasddasdsdasdasad
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t18. \t\tsadsdsaddasadas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t19. \t\tsdasadasdasdasdsasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20. \tsaddasdsadas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t21. \tsdasdassadsddassddsa\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t22. \t> 
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t> dsasasdassddsaasdsadassadsdasaaaaaaaaaaasdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t> 1. sdaasdsadsdas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t> 2. sadasddasdasdas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t> 3. sadasdadsasdads
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t> 4. sdaasdasddasdsas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t23. sddssdaasda
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t24. \tsdaasdsadsadsadasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t25. \tsadsaddasdsa
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t26. \tsdasaddsasads
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27. \tsdasadsadsda
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t28. \tsaddsadsasdsas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t29. \tsdaadsasaddsa
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t30. sadsadadssaddasdas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t31. \tsasaddassaasd\t
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t32. \tsaddasdsdaasdasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t33. \tsaddasdsdaasdasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t34. \tsaddasdsdaasdasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t35. \tsaddasdsdaasdasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t36. \tsaddasdsdaasdasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t37. \tsaddasdsdaasdasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsdaasddassadas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsdasddaasdsdad
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsdaasddsdsad
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsaddassadsdadasdsa
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsasdadassad
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsdaadsasddasdas
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdaasddsaasd
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsdasadsadsadsaddsaasds
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tssdsadsdsadsaasddassadsadsadsdadsaasd
`
]