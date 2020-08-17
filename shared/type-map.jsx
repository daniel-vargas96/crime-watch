const typeMap = {
  'Theft From Motor Vehicle': 'property',
  'Theft From Building': 'property',
  'Suspicious Activity/All Other': 'other',
  'Family Offenses/All Other': 'other',
  'Negligent Manslaughter': 'violent',
  'All Other Larceny': 'property',
  'Simple Assault': 'violent',
  'Destruction/Damage/Vandalism of Property': 'property',
  'Motor Vehicle Theft': 'property',
  'Aggravated Assault': 'violent',
  'Burglary/Breaking & Entering': 'property',
  'Domestic Violence/Simple Assault': 'violent',
  Robbery: 'property',
  'Identity Theft': 'whiteCollar',
  Shoplifting: 'property',
  Intimidation: 'organized',
  'Weapon Law Violations': 'organized',
  'False Pretenses/Swindle/Confidence Game': 'whiteCollar',
  'Trespass of Real Property': 'property',
  'Domestic Violence/Aggravated Assault': 'violent',
  'Child Abuse/Simple/Psychological abuse': 'violent',
  Rape: 'violent',
  'Counterfeiting/Forgery': 'whiteCollar',
  'Human Trafficking, Commercial Sex Acts': 'organized',
  'Human Trafficking, Involuntary Servitude': 'organized',
  'Assisting or Promoting Prostitution': 'organized',
  Embezzlement: 'whiteCollar',
  'Sexual Battery': 'violent',
  'Stolen Property Offenses': 'property',
  'Drug Equipment Violations': 'publicOrder',
  Drunkenness: 'publicOrder',
  Arson: 'property',
  'Drug/Narcotic Violations': 'publicOrder',
  'Disorderly Conduct': 'publicOrder',
  'Driving Under the Influence': 'publicOrder',
  'Kidnapping/Abduction': 'organized',
  'Extortion/Blackmail': 'highTech',
  'Curfew/Loitering/Vagrancy Violations': 'publicOrder',
  'Hacking/Computer Invasion': 'highTech',
  'Credit Card/Automated Teller Machine Fraud': 'highTech',
  'Murder & Non-negligent Manslaughter': 'violent',
  'Child Abuse/Sexual abuse': 'violent',
  'All Other Offenses': 'other',
  'Sexual Assault With An Object': 'violent'
};

export default typeMap;
