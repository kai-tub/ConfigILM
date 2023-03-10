Search.setIndex({"docnames": ["extra/BEN_LMDB_Reader", "extra/bigearthnet", "extra/cocoqa", "extra/rsvqaxben", "general/code_of_conduct", "general/contributing", "general/dependencies", "general/license", "image_captioning", "index", "installation", "references", "sup_pretraining", "vqa", "wip"], "filenames": ["extra/BEN_LMDB_Reader.ipynb", "extra/bigearthnet.ipynb", "extra/cocoqa.ipynb", "extra/rsvqaxben.ipynb", "general/code_of_conduct.md", "general/contributing.md", "general/dependencies.md", "general/license.md", "image_captioning.ipynb", "index.md", "installation.ipynb", "references.md", "sup_pretraining.ipynb", "vqa.ipynb", "wip.md"], "titles": ["Using the BigEarthNet LMDB Reader", "BigEarthNet Dataset &amp; Datamodule", "COCO-QA", "RSVQAxBEN Dataset &amp; Datamodule", "Contributor Covenant Code of Conduct", "Contributing", "Dependencies", "License", "[WIP] Image Captioning", "ConfigVLM", "Get started", "Further references", "Supervised Vision Pre-training", "Visual Question Answering", "&lt;no title&gt;"], "terms": {"In": [0, 1, 2, 3, 5, 9, 11], "thi": [0, 1, 2, 3, 4, 5, 7, 9, 10, 12, 13], "section": [0, 10, 12, 13], "an": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14], "exampl": [0, 3, 4, 9, 10, 12, 13], "i": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14], "shown": 0, "convert": [0, 3, 13], "lightn": [0, 1, 3, 6, 9], "memori": [0, 1, 3], "map": 0, "databas": 0, "manag": [0, 5], "background": 0, "index": [0, 1, 2, 3, 13], "python": [0, 5, 9, 12, 13], "object": [0, 1, 3, 10], "To": [0, 1, 3, 5], "we": [0, 2, 3, 4, 5, 11, 12, 13], "have": [0, 1, 3, 4, 5, 12, 13], "creat": [0, 5, 10], "benlmdbread": [0, 1, 3], "need": [0, 1, 2, 3, 5, 12, 13], "4": [0, 1, 3, 6, 11, 12, 13], "argument": 0, "creation": [0, 12, 13], "name": [0, 1, 3, 11, 12, 13], "directori": [0, 5, 13], "where": [0, 13], "lmbd": 0, "file": [0, 1, 3, 7], "locat": 0, "string": 0, "sequenc": [0, 3], "3": [0, 1, 2, 3, 6, 10, 11, 12, 13], "int": [0, 13], "desir": 0, "imag": [0, 2, 10, 11, 12, 13], "size": [0, 1, 2, 3, 4, 10, 12, 13], "channel": [0, 1, 2, 3, 4, 10, 12, 13], "height": 0, "width": [0, 2], "indic": 0, "which": [0, 1, 3, 4, 10, 13], "ar": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13], "from": [0, 1, 2, 3, 4, 7, 10, 11, 12, 13], "configvlm": [0, 1, 2, 3, 5, 8, 10, 12, 13, 14], "extra": [0, 1, 2, 3, 6, 10, 12, 13], "ben_lmdb_util": 0, "import": [0, 1, 2, 3, 10, 12, 13], "ben_read": 0, "lmdb_dir": 0, "my_data_path": [0, 1, 2, 3, 12, 13], "image_s": [0, 1, 3, 10, 12, 13], "120": [0, 1, 2, 3, 12, 13], "rgb": [0, 1, 3], "label_typ": 0, "old": 0, "img": [0, 1, 2, 3], "lbl": [0, 1], "s2b_msil2a_20180502t093039_82_40": 0, "expect": [0, 1, 2, 3, 13], "contain": [0, 1, 3, 9, 13], "3x120x120": 0, "annot": 0, "43": [0, 11], "version": [0, 1, 4, 6, 12, 13], "deliv": 0, "torch": [0, 1, 2, 3, 6, 12, 13], "tensor": [0, 1, 2, 3, 13], "list": [0, 5, 12, 13], "complex": 0, "cultiv": 0, "pattern": [0, 4], "land": [0, 1], "princip": 0, "occupi": 0, "agricultur": 0, "signific": 0, "area": [0, 5, 9], "natur": [0, 2, 3, 4], "veget": 0, "broad": 0, "leav": 0, "forest": [0, 3], "transit": [0, 3], "woodland": [0, 3], "shrub": [0, 3], "water": 0, "bodi": [0, 4], "If": [0, 2, 3, 5, 10], "now": [0, 8, 12, 13, 14], "interest": 0, "can": [0, 1, 2, 3, 5, 10, 13], "specif": [0, 1], "onli": [0, 1, 2, 3], "return": [0, 1, 12, 13], "b8": 0, "b4": 0, "The": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14], "defin": [0, 3, 12, 13], "begin": 0, "align": [0, 4], "vi": 0, "frac": [0, 1, 3], "b08": 0, "b04": 0, "end": [0, 1, 3, 5, 10, 13], "2": [0, 1, 2, 3, 6, 10, 11, 13], "veg_idx": 0, "0": [0, 1, 2, 3, 6, 10, 12, 13], "1": [0, 1, 2, 3, 6, 10, 11, 12, 13], "08": 0, "dimens": [0, 3], "04": 0, "like": [0, 1, 3, 4, 5, 10], "order": [0, 1, 3], "specifi": [0, 1, 3, 4, 10], "paramet": [0, 1, 2, 3, 10, 12, 13], "note": [0, 1, 3], "also": [0, 1, 3, 4, 10], "ha": [0, 1, 3], "set": [0, 2, 4, 5, 11, 12, 13], "check": [0, 5, 13], "after": [0, 1, 3, 5, 12, 13], "interpol": 0, "alreadi": 0, "appli": [0, 4], "loader": 0, "nn": [0, 12], "function": [0, 1, 3, 12, 13], "corner": 0, "bicub": 0, "mode": 0, "For": [0, 1, 3, 4, 10, 12, 13], "eas": 0, "some": [0, 3, 5, 10, 12, 13], "predefin": [0, 9, 10], "configur": [0, 1, 2, 3, 9], "avail": [0, 1, 4], "without": [0, 4, 7, 9], "all": [0, 1, 3, 4, 5, 7, 10, 11, 12, 13], "pre": [0, 6, 9, 10, 13], "definit": 0, "respect": [0, 1, 4, 12, 13], "s1": [0, 11], "vh": 0, "vv": 0, "s2": [0, 1, 3, 11], "b02": 0, "b03": 0, "b05": 0, "b06": 0, "b07": 0, "b11": 0, "b12": 0, "b8a": 0, "10m20m": 0, "ir": 0, "10": [0, 1, 3, 6, 11, 13], "12": [0, 1, 3, 6, 12, 13], "request": [0, 4, 5, 13], "new": [0, 11, 13], "19": [0, 1, 3, 11, 12], "introduc": [0, 11], "sumbul": [0, 1, 11], "et": [0, 1, 2, 3, 11], "al": [0, 1, 2, 3, 11], "here": [0, 1, 3, 11, 13], "see": [0, 1, 2, 3, 4], "get": [0, 5], "inland": 0, "pprint": [0, 10], "wish": 0, "dimension": 0, "one": [0, 1, 2, 3, 13], "hot": [0, 1, 3], "guarante": 0, "uniform": 0, "convers": 0, "so": [0, 7, 13], "each": [0, 1, 3, 13], "vector": [0, 1, 3], "alwai": [0, 3, 10], "same": [0, 1, 3, 9], "regardless": [0, 4], "user": 0, "ben19_list_to_onehot": 0, "collect": [0, 10, 11], "dure": [0, 3, 4, 12, 13], "initi": [0, 1, 13], "base": [0, 1, 2, 3], "chosen": 0, "ben_reader_1": 0, "print": [0, 1, 3], "f": [0, 3, 12, 13], "std": 0, "ben_reader_2": 0, "b01": 0, "2218": 0, "94553375": 0, "590": 0, "23569706": 0, "1365": 0, "45589904": 0, "675": 0, "88746967": 0, "340": 0, "76769064": 0, "2266": 0, "46036911": 0, "554": 0, "81258967": 0, "1356": 0, "13789355": 0, "page": [1, 2, 3, 5], "describ": [1, 2, 3, 12, 13], "usag": [1, 2, 3, 12, 13], "multi": [1, 11], "spectral": 1, "multilabel": [1, 11], "remot": [1, 9, 11, 13], "sens": [1, 9, 11, 13], "us": [1, 2, 3, 4, 5, 7, 10, 12, 13], "cover": [1, 3, 10, 13], "classif": [1, 10, 11, 12], "offici": [1, 4], "paper": [1, 11], "wa": [1, 2, 3, 4, 13], "publish": [1, 2, 3, 4, 7], "updat": 1, "modal": [1, 11, 13], "detail": 1, "inform": [1, 4, 10, 11], "itself": 1, "pleas": 1, "refer": 1, "public": [1, 4, 11], "guid": [1, 5], "modul": [1, 3], "two": [1, 3, 10], "class": [1, 4, 10, 11, 12, 13], "standard": [1, 3], "util": [1, 3], "data": [1, 2, 3, 11, 13], "pytorch_lightn": [1, 3, 12, 13], "lightningdatamodul": [1, 3], "encapsul": [1, 3, 12, 13], "easi": [1, 3, 9, 13], "applic": [1, 3, 9], "read": [1, 3, 11], "label": [1, 12, 13], "lmdb": [1, 3, 6], "its": [1, 2, 3, 5], "most": [1, 2, 3, 13], "basic": [1, 2, 3, 12, 13], "form": [1, 2, 3], "path": [1, 2, 3], "assum": [1, 3], "bigearthnetencod": [1, 3], "o": [1, 3], "point": [1, 3], "view": [1, 3], "folder": [1, 2, 3], "10m": [1, 3], "20m": [1, 3], "sentinel": [1, 3, 11], "full": [1, 2, 3], "structur": [1, 2, 3], "mdb": [1, 3], "lock": [1, 3], "test": [1, 2, 3, 5, 9, 12, 13], "csv": [1, 3], "train": [1, 2, 3, 9, 10, 11, 13], "val": [1, 3, 12, 13], "ben_datamodule_lmdb_encod": [1, 12], "d": [1, 2, 3], "root_dir": [1, 2, 3], "56": 1, "flip": [1, 3], "choos": [1, 3], "bgr": [1, 3], "axi": [1, 3], "displai": [1, 3], "bring": [1, 3], "ben": 1, "none": [1, 2, 3, 10, 12, 13], "75": [1, 3, 13], "patch": [1, 11], "filter": 1, "support": [1, 3, 10], "differ": [1, 3, 4, 13], "howev": [1, 2, 3], "via": [1, 3, 4, 10], "limit": [1, 2, 3, 7], "combin": [1, 3, 10, 13], "call": [1, 3, 12, 13], "get_available_channel_configur": 1, "altern": [1, 10], "faulti": [1, 3], "possibl": [1, 3, 5, 9, 10, 13], "well": [1, 4, 12, 13], "whilst": 1, "rais": 1, "assertionerror": [1, 3], "work": [1, 5, 12, 13], "lmdbreader": 1, "It": [1, 2, 3, 8, 9, 14], "By": [1, 3], "default": [1, 2, 3], "three": [1, 3], "_": [1, 2, 3], "25": [1, 2, 3, 10, 13], "max_img_idx": [1, 2, 3], "n": [1, 3], "first": [1, 2, 3, 11, 12, 13], "alphabet": [1, 3], "A": [1, 3, 4, 7, 10, 11, 13], "larger": [1, 3], "than": [1, 3], "": [1, 3, 4, 13], "case": [1, 3], "equal": [1, 3], "behaviour": [1, 3], "100": [1, 2, 3, 10, 13], "wrap": [1, 3], "automat": [1, 3, 5], "gener": [1, 2, 3, 5, 12, 13], "per": [1, 3], "augment": [1, 3], "shuffl": [1, 3], "etc": [1, 3, 12, 13], "depend": [1, 3, 5, 10, 12, 13], "resiz": [1, 3], "normal": [1, 3], "addition": [1, 3], "nois": [1, 3], "rotat": [1, 3], "overwritten": [1, 3], "below": [1, 3], "setup": [1, 3, 13], "popul": [1, 3], "insid": [1, 3, 12, 13], "stage": [1, 3], "fit": [1, 3, 7, 12, 13], "prepar": [1, 3], "valid": [1, 3, 12, 13], "dm": [1, 3, 12, 13], "data_dir": [1, 3, 12, 13], "befor": [1, 3], "train_d": [1, 3], "val_d": [1, 3], "test_d": [1, 3], "worker": [1, 3, 12, 13], "34": 1, "18": 1, "took": [1, 13], "00": [1, 3, 13], "second": [1, 13], "total": [1, 3, 13], "sampl": [1, 13], "0x7f85b7b91420": 1, "0x7f85b7b93790": 1, "afterward": [1, 3], "pytorch": [1, 3, 6, 9], "easili": [1, 3, 10], "access": [1, 3, 11], "len": [1, 3], "dl": [1, 3], "lceil": [1, 3], "batch": [1, 3, 12, 13], "_size": [1, 3], "rceil": [1, 3], "therefor": [1, 3, 10, 13], "batch_siz": [1, 3], "16": [1, 3, 13], "train_load": [1, 3], "train_dataload": [1, 3], "addit": [1, 3, 9, 10, 13], "pass": [1, 3, 5, 12, 13], "through": [1, 3, 4], "settabl": [1, 3], "num_workers_dataload": [1, 3, 12, 13], "cpu_count": [1, 3], "valu": [1, 3, 12, 13], "mean": [1, 3, 10, 12, 13], "chang": [1, 3, 5], "accompani": [1, 3], "messag": [1, 3], "hint": [1, 3], "Not": [1, 10], "changeabl": 1, "pin": [1, 3], "true": [1, 6, 10, 12, 13], "cuda": [1, 3, 12, 13], "enabl": 1, "devic": [1, 3, 13], "found": [1, 3, 13], "fals": [1, 3, 10], "otherwis": [1, 3, 4, 7], "45": 1, "15": [1, 13], "7": [1, 3, 6, 13], "96mhint": [1, 3, 13], "recommend": [1, 3, 10, 11], "0m": [1, 2, 3, 13], "dataload": [2, 9, 12, 13], "datamodul": [2, 9, 12, 13], "vqa": [2, 3, 10, 13], "ren": [2, 11], "coco_train2014_": 2, "id": 2, "jpg": 2, "b": 2, "coco_val2014_": 2, "j": 2, "z": 2, "qa_qa_test": 2, "json": [2, 3], "qa_qa_train": 2, "cocoqa_datamodul": 2, "cocoqadataset": 2, "question": [2, 3, 4, 11], "answer": [2, 4, 11], "93mwarn": [2, 3, 13], "No": [2, 3, 4], "token": [2, 13], "provid": [2, 3, 4, 5, 7, 9, 11], "berttoken": [2, 3], "uncas": [2, 3], "mai": [2, 3, 4, 5], "result": [2, 3, 12, 13], "veri": [2, 3], "bad": [2, 3], "perform": [2, 3], "network": [2, 3, 10, 12, 13], "other": [2, 3, 4, 5, 7, 10, 11], "load": [2, 13], "50": [2, 13], "pair": [2, 3, 11, 13], "reduc": [2, 3, 13], "start": [2, 3, 5, 12, 13], "101": [2, 3, 13], "2054": 2, "2003": 2, "1996": 2, "3609": 2, "1997": 2, "3933": 2, "102": [2, 3, 13], "As": [2, 3], "out": [2, 3, 7], "languag": [2, 3, 4, 9, 10, 13], "text": [2, 3], "lead": [2, 3, 4], "account": [2, 3, 4], "input": [2, 3, 13], "get_hf_model": [2, 3, 13], "prajjwal1": [2, 3, 13], "bert": [2, 3, 13], "tini": [2, 3, 13], "split": [2, 13], "transform": [2, 6], "number": [2, 12, 13], "img_siz": [2, 3, 12, 13], "should": [2, 9, 10], "high": 2, "seq_length": [2, 3], "200": 2, "5": [2, 3, 6, 13], "32": [2, 10], "3157": 2, "2417": 2, "1012": 2, "bigearthnet": [3, 6, 12, 13], "coco": [], "qa": [3, 13], "dataset": [10, 11], "member": 4, "leader": 4, "make": [4, 11, 13], "particip": 4, "commun": [4, 5], "harass": 4, "free": [4, 5, 7], "experi": 4, "everyon": [4, 5], "ag": 4, "visibl": 4, "invis": 4, "disabl": 4, "ethnic": 4, "sex": 4, "characterist": 4, "gender": 4, "ident": [4, 13], "express": [4, 7], "level": [4, 11], "educ": 4, "socio": 4, "econom": 4, "statu": [4, 9], "nation": 4, "person": [4, 7], "appear": 4, "race": 4, "cast": 4, "color": 4, "religion": 4, "sexual": 4, "orient": 4, "act": 4, "interact": [4, 11], "wai": [4, 5, 10, 13], "contribut": 4, "open": [4, 5, 9], "welcom": [4, 5], "divers": 4, "inclus": 4, "healthi": 4, "behavior": 4, "posit": 4, "environ": [4, 5], "includ": [3, 4, 7, 11], "demonstr": 4, "empathi": 4, "kind": [4, 7], "toward": 4, "peopl": 4, "Being": 4, "opinion": 4, "viewpoint": 4, "give": 4, "gracefulli": 4, "accept": 4, "construct": 4, "feedback": 4, "apolog": 4, "those": 4, "affect": 4, "mistak": [4, 5], "learn": [4, 6, 12, 13], "focus": 4, "what": 4, "best": [4, 5], "just": [4, 12, 13], "u": [4, 12, 13], "individu": 4, "overal": 4, "unaccept": 4, "imageri": 4, "attent": 4, "advanc": [4, 11], "ani": [4, 7, 10], "troll": 4, "insult": 4, "derogatori": 4, "comment": 4, "polit": 4, "attack": 4, "privat": 4, "physic": 4, "email": 4, "address": 4, "explicit": 4, "permiss": [4, 7], "could": [3, 4], "reason": [4, 13], "consid": [4, 9], "inappropri": 4, "profession": 4, "clarifi": 4, "take": [4, 5], "appropri": 4, "fair": 4, "action": [4, 7], "thei": 4, "deem": 4, "threaten": 4, "offens": 4, "harm": 4, "right": [4, 7], "remov": [4, 12, 13], "edit": 4, "reject": 4, "commit": [4, 6], "wiki": 4, "issu": [4, 5], "moder": 4, "decis": 4, "when": [3, 4, 13], "within": 4, "space": 4, "repres": 4, "e": [4, 10, 13], "mail": 4, "post": 4, "social": 4, "media": 4, "appoint": 4, "onlin": 4, "offlin": 4, "event": [4, 7], "instanc": 4, "abus": 4, "report": 4, "insert": 4, "contact": 4, "method": [4, 10], "complaint": 4, "review": 4, "investig": 4, "promptli": 4, "fairli": 4, "oblig": 4, "privaci": 4, "secur": 4, "incid": 4, "follow": [4, 5, 7, 10], "impact": 4, "determin": [3, 4], "consequ": 4, "violat": 4, "unprofession": 4, "unwelcom": 4, "written": 4, "clariti": 4, "around": [4, 5], "explan": 4, "why": 4, "apologi": 4, "singl": [4, 12, 13], "seri": 4, "continu": 4, "involv": 4, "unsolicit": 4, "period": 4, "time": [4, 5, 9], "avoid": 4, "extern": 4, "term": 4, "seriou": 4, "sustain": 4, "sort": 4, "allow": [4, 9, 10, 12], "aggress": 4, "disparag": 4, "adapt": 4, "http": [4, 5, 11], "www": 4, "org": [4, 11], "code_of_conduct": 4, "html": 4, "were": [4, 13], "inspir": 4, "mozilla": 4, "ladder": 4, "common": [4, 6], "about": [3, 4, 5, 13], "faq": 4, "translat": 4, "project": 5, "effort": [5, 9], "thank": 5, "you": [5, 8, 10, 13, 14], "look": [5, 10], "how": [5, 10], "There": [5, 10, 13], "mani": [5, 10], "help": 5, "framework": [5, 9, 12, 13], "document": [5, 7, 9, 11, 13], "grow": 5, "coupl": 5, "more": [3, 5, 11], "broader": 5, "easiest": 5, "improv": 5, "highlight": 5, "further": 5, "refin": 5, "would": [5, 10], "discuss": 5, "someth": 5, "featur": 5, "feel": 5, "github": [5, 10], "tell": 5, "star": 5, "poetri": 5, "up": [3, 5, 12, 13], "develop": [5, 9, 13], "download": [5, 10, 11], "instal": [5, 9, 10], "clone": 5, "repositori": [5, 11], "git": [5, 11], "com": 5, "lhackel": [5, 13], "tub": 5, "cd": 5, "replic": 5, "your": 5, "speed": 5, "hack": 5, "pr": 5, "suit": 5, "still": 5, "requir": [3, 5, 11], "successfulli": 5, "regener": 5, "try": [3, 5, 13], "our": [5, 11, 12, 13], "back": 5, "quickli": 5, "hard": 5, "stick": 5, "until": 5, "tool": 6, "13": 6, "numpi": [6, 12, 13], "24": [6, 13], "timm": [6, 9, 13], "6": [6, 13], "26": 6, "appdir": 6, "option": [6, 12, 13], "encod": [3, 6], "9": [6, 11], "matplotlib": 6, "scikit": 6, "bolt": 6, "post1": 6, "fvcore": 6, "post20221221": 6, "group": [6, 11], "dev": 6, "pytest": 6, "coverag": 6, "mock": 6, "furo": 6, "2022": 6, "myst": 6, "nb": 6, "17": [6, 13], "sphinx": 6, "autobuild": 6, "2021": [6, 11], "14": 6, "sphinxcontrib": 6, "bibtex": 6, "preprocessor": 6, "jupyterlab": 6, "tensorboardx": 6, "mit": 7, "copyright": 7, "c": 7, "2023": 7, "leonard": 7, "wayn": 7, "hackel": 7, "herebi": 7, "grant": 7, "charg": 7, "obtain": 7, "copi": 7, "softwar": [7, 11], "associ": [7, 10], "deal": 7, "restrict": 7, "modifi": 7, "merg": [7, 9], "distribut": [3, 7], "sublicens": 7, "sell": 7, "permit": 7, "whom": 7, "furnish": 7, "do": 7, "subject": 7, "condit": 7, "abov": [7, 12, 13], "notic": 7, "shall": 7, "substanti": 7, "portion": 7, "THE": 7, "AS": 7, "warranti": 7, "OF": 7, "OR": 7, "impli": 7, "BUT": 7, "NOT": [7, 13], "TO": 7, "merchant": 7, "FOR": 7, "particular": 7, "purpos": 7, "AND": 7, "noninfring": 7, "IN": 7, "NO": 7, "author": 7, "holder": 7, "BE": 7, "liabl": 7, "claim": 7, "damag": 7, "liabil": 7, "whether": 7, "contract": 7, "tort": 7, "aris": 7, "connect": 7, "WITH": 7, "content": [8, 14], "select": [8, 14], "activ": [8, 9, 14], "part": [8, 10, 14], "site": [9, 13], "beta": 9, "wip": [9, 14], "sourc": [9, 10], "librari": [9, 11, 13], "rapid": 9, "iter": 9, "vision": [9, 10, 13], "model": 9, "implement": 9, "potenti": 9, "huggingfac": [9, 13], "varieti": 9, "At": 9, "interfac": 9, "simplifi": 9, "exchang": 9, "compon": 9, "thu": 9, "offer": 9, "novel": 9, "packag": [3, 9, 13], "built": [9, 10], "throughput": 9, "optim": [9, 12, 13], "directli": [9, 10], "variou": 9, "r": 9, "context": 3, "instruct": 9, "tutori": 9, "complet": 9, "current": [3, 10], "pypi": 10, "pip": 10, "them": 10, "task": [10, 13], "supervis": 10, "pretrain": [10, 13], "fashion": [10, 12, 13], "checkpoint": [10, 13], "central": 10, "dataclass": 10, "vlmconfigur": [10, 12, 13], "decid": 10, "consist": 10, "ultim": 10, "solv": 10, "properti": 10, "unus": 10, "type": [10, 13], "fusion": 10, "vlmtype": [10, 12, 13], "model_config": [10, 12, 13], "timm_model_nam": [10, 12, 13], "resnet18": [10, 12, 13], "128": 10, "network_typ": [10, 12, 13], "vision_classif": [10, 12], "hf_model_nam": [10, 12, 13], "class_nam": 10, "visual_features_out": 10, "512": 10, "fusion_in": 10, "fusion_hidden": 10, "256": 10, "v_dropout_r": 10, "t_dropout_r": 10, "fusion_dropout_r": 10, "fusion_method": 10, "mul": 10, "0x7f2e451fd460": 10, "fusion_activ": 10, "tanh": 10, "drop_rat": 10, "use_pooler_output": 10, "max_sequence_length": 10, "load_timm_if_avail": 10, "load_hf_if_avail": 10, "facilit": 10, "organ": 10, "code": [10, 11], "prevent": [3, 10], "global": 10, "variabl": 10, "vqa_classif": [10, 13], "relev": [3, 11], "link": 11, "research": 11, "mm": 11, "nomenclatur": 11, "websit": 11, "everi": 11, "re": [3, 11], "run": 11, "procedur": 11, "These": [3, 11, 12, 13], "tensorflow": 11, "tu": 11, "berlin": 11, "de": 11, "rsim": 11, "s2_43": 11, "classes_model": 11, "s2_19": 11, "simultan": 11, "mm_19": 11, "s1_tool": 11, "geotiff": 11, "script": [11, 12, 13], "extract": 11, "1c": 11, "grd": 11, "tile": 11, "disk": 11, "s2_tool": 11, "while": [11, 12, 13], "skip": 11, "cloudi": 11, "snowi": 11, "archiv": 11, "mm_tool": 11, "mengy": 11, "ryan": 11, "kiro": 11, "richard": 11, "zemel": 11, "explor": 11, "neural": 11, "process": 11, "system": 11, "2015": 11, "gencer": 11, "marcela": 11, "charfuelan": 11, "beg\u00fcm": 11, "demir": 11, "volker": 11, "markl": 11, "larg": [11, 13], "scale": [11, 13], "benchmark": 11, "understand": 11, "igarss": 11, "2019": 11, "ieee": 11, "intern": [11, 12, 13], "geoscienc": 11, "symposium": 11, "juli": 11, "url": 11, "doi": 11, "1109": 11, "8900532": 11, "arn": 11, "wall": 11, "tristan": 11, "kreuzig": 11, "filip": 11, "marcelino": 11, "hugo": 11, "costa": 11, "pedro": 11, "benevid": 11, "mario": 11, "caetano": 11, "multimod": 11, "retriev": 11, "geosci": 11, "sen": 11, "mag": 11, "174": 11, "180": 11, "septemb": 11, "mgr": 11, "3089174": 11, "trainer": [12, 13], "integr": [12, 13], "lightningmodul": [12, 13], "releas": [12, 13], "write": [12, 13], "loop": [12, 13], "pl": [12, 13], "divid": [12, 13], "usual": [12, 13], "necessari": [12, 13], "training_step": [12, 13], "configure_optim": [12, 13], "fulli": [12, 13], "add": [12, 13], "step": [12, 13], "evalu": [12, 13], "_step": [12, 13], "_epoch_end": [12, 13], "litvqaencod": [12, 13], "def": [12, 13], "__init__": [12, 13], "self": [12, 13], "config": [12, 13], "lr": [12, 13], "float": [12, 13], "1e": [12, 13], "super": [12, 13], "batch_idx": [12, 13], "x": [12, 13], "y": [12, 13], "x_hat": [12, 13], "loss": [12, 13], "binary_cross_entropy_with_logit": [12, 13], "log": [12, 13], "adamw": [12, 13], "weight_decai": [12, 13], "01": [12, 13], "non": [3, 12, 13], "mandatori": [12, 13], "validation_step": [12, 13], "output": [3, 12, 13], "validation_epoch_end": [12, 13], "avg_loss": [12, 13], "stack": [12, 13], "test_step": [12, 13], "test_epoch_end": [12, 13], "tensorboard": [12, 13], "callback": [12, 13], "logger": [12, 13], "tensorboardlogg": [12, 13], "hyperparamet": [12, 13], "model_nam": [12, 13], "seed": [12, 13], "42": [12, 13], "number_of_channel": [12, 13], "epoch": [12, 13], "5e": [12, 13], "Then": [12, 13], "later": [12, 13], "random": [12, 13], "spawn": [12, 13], "subprocess": [12, 13], "seed_everyth": [12, 13], "save_dir": [12, 13], "tb_log": [12, 13], "testvers": [12, 13], "max_epoch": [12, 13], "acceler": [12, 13], "auto": [12, 13], "log_every_n_step": [12, 13], "log_hyperparam": [12, 13], "gpu": [12, 13], "get_device_nam": [12, 13], "is_avail": [12, 13], "els": [12, 13], "rate": [12, 13], "final": [12, 13], "bendatamodul": 12, "quit": [12, 13], "bit": [12, 13], "readabl": [12, 13], "both": 13, "either": 13, "weight": 13, "composit": 13, "rsvqaxben": 13, "rsvqa": [11, 13], "meet": [11, 13], "instead": 13, "_disassemble_batch": 13, "disassembl": 13, "come": 13, "transpos": 13, "element": [3, 13], "big": 13, "tolist": 13, "t": 13, "vision_model_nam": 13, "text_model_nam": 13, "1000": 13, "rsvqaxben_datamodule_lmdb_encod": [3, 13], "rsvqaxbendatamodul": 13, "lobri": [3, 11], "sylvain": 11, "beg": 11, "\u00fc": 11, "m": [11, 13], "devi": 11, "tuia": 11, "visual": 11, "1218": 11, "1221": 11, "zenodo": 3, "wheel": 10, "equat": 10, "want": 10, "g": [10, 13], "py3": 10, "whl": 10, "extend": 3, "band": [], "origin": 3, "small": 3, "vqa_rsvqaxben": 3, "rsvqaxben_qa_train": 3, "rsvqaxben_qa_v": 3, "rsvqaxben_qa_test": 3, "np": [3, 13], "arrai": [3, 13], "1139756": [], "52it": 13, "950371": [], "00it": 13, "2024": 3, "7976": 3, "2752": 3, "2030": 3, "4910": 3, "2556": 3, "1029": 3, "1449644": [], "24it": [], "1294538": [], "27it": 13, "1209895": [], "38it": [], "1316204": [], "18it": [], "1273574": [], "09it": [], "2045": [], "16630": [], "1999": [], "3746": [], "936228": [], "57it": [], "clip": [], "rang": [], "imshow": [], "255": [], "integ": 3, "9514": [], "1998": [], "6138": 3, "5380": [], "1361787": [], "01it": 13, "24813": [], "3496": [], "514007": [], "84it": [], "2070": 3, "pin_memori": [3, 13], "typeerror": [], "traceback": [], "recent": [], "last": 3, "cell": [], "21": [], "line": [], "8": 3, "subscript": [], "22": [], "got": [], "unexpect": [], "keyword": 13, "1143901": [], "752566": [], "51it": 13, "1107650": [], "70it": 13, "1436405": [], "48it": [], "328021": [], "69it": 13, "1258291": [], "20it": [], "preconfigur": 3, "py": 13, "selected_answ": 3, "assert": [], "103": [], "104": [], "105": [], "106": [], "107": [], "108": [], "109": [], "110": [], "112": [], "113": [], "warn": 13, "114": 13, "115": 13, "116": [], "117": [], "except": 3, "1429876": [], "36it": 13, "1416994": [], "59it": 13, "count": [3, 13], "794375": [], "76it": 3, "fewer": [3, 13], "frequent": [3, 13], "466033": [], "78it": [], "676500": [], "65it": [], "284166": [], "94it": [], "177724": [], "75it": [], "182361": [], "04it": [], "411206": [], "995483": [], "54it": 13, "1442994": [], "50it": [], "733269": [], "93it": 13, "361577": [], "330260": [], "16it": 13, "1385783": [], "26it": [], "1355917": [], "1476867": 3, "61it": [3, 13], "1338607": [], "66it": [], "925214": [], "12it": [], "length": 3, "771011": 3, "391991": [], "03it": 13, "1613193": [], "85it": 13, "11": [], "1103764": [], "21it": [], "322638": [], "77it": [], "551882": [], "11it": [], "724822": [], "shorter": 3, "pad": 3, "zero": 3, "longer": 3, "truncat": 3, "362829": [], "07it": 13, "221920": [], "909169": [], "1350097": [], "1423406": [], "33it": 13, "1512369": [], "23it": 13, "388361": [], "1344328": [], "699050": [], "67it": [], "1077304": [], "certain": 3, "million": 3, "explos": 3, "highest": 3, "reduct": 3, "973909": [], "60it": 13, "776722": [], "96it": 13, "953250": [], "91it": 13, "96": 3, "812849": [], "1505133": [], "1580767": [], "743670": [], "92it": 13, "74631": [], "74it": [], "1483833": [], "888623": [], "73it": 3, "838860": [], "80it": 13, "ye": 3, "mix": 3, "745433": [], "1367707": [], "83it": [], "1289232": [], "79it": [], "1572864": [], "364722": [], "825650": 3, "39it": [3, 13], "414456": [], "643298": [], "429744": [], "529583": [], "subset": 3, "nameerror": [], "325644": [], "72it": [3, 13], "382691": [], "97it": [], "249660": [], "95it": 3, "344926": [], "32it": [], "250256": [], "doe": 3, "necessarili": 3, "match": 3, "never": 3, "300451": [], "58it": [], "409600": [], "192399": [], "440578": [], "15it": [], "492289": [], "521679": [], "indexerror": 3, "48": [], "239": [], "__getitem__": [], "idx": [], "236": [], "237": [], "_to_label": [], "qa_pair": [], "241": [], "242": [], "question_id": [], "huggingface_tokenize_and_pad": [], "243": [], "244": [], "245": [], "246": [], "207": [], "205": [], "206": [], "label_idx": [], "208": [], "valueerror": [], "209": [], "empti": 13, "210": [], "bound": [], "happen": 3, "abl": 3, "270949": [], "87it": 13, "754371": [], "22it": [], "49": [], "234057": [], "14it": [], "1283970": [], "979977": [], "1332935": [], "1398101": [], "367921": [], "40it": [], "873813": [], "782519": [], "29": [], "800439": [], "03": [], "0x7f9e0de9a6b0": [], "0x7f9e1f0e9390": [], "four": 3, "1059167": [], "68it": [], "898779": [], "43it": [], "627889": [], "82it": 13, "343795": [], "41it": [], "1228800": [], "819200": [], "694421": [], "19it": [], "859488": [], "57": [], "765383": [], "866591": [], "0x7f49192c55d0": [], "0x7f49f354d810": [], "1031386": [], "1263344": [], "1238475": [], "1463129": [], "30it": 3, "672164": [], "10it": [], "341000": [], "728177": [], "788403": [], "33": [], "620459": [], "17it": 3, "903944": [], "0x7f33208014e0": [], "0x7f3311d7e860": [], "1021340": [], "901354": [], "403298": [], "46it": [], "268865": [], "64it": [], "964947": [], "944663": [], "06it": 13, "881156": [], "647269": [], "30": [], "0x7fa10db7a050": [], "0x7fa105d03160": [], "821338": [], "90it": [], "738433": [], "395689": [], "1379705": [], "832203": 3, "35": [], "0x7f262418e950": [], "0x7f26281fde70": [], "683853": [], "1214566": [], "1327311": [], "1497965": [], "71it": 3, "713317": [], "453929": [], "806596": [], "602629": [], "89it": 13, "911805": [], "0x7fed31c87d90": [], "0x7fee1b13dba0": [], "1156517": [], "976934": [], "377865": [], "1456355": [], "56it": [], "961996": [], "548992": [], "546133": [], "94381": [], "28it": [], "703742": [], "0x7f0035397c70": [], "0x7f0046306aa0": [], "891141": [], "08it": [], "896218": [], "27": [], "511500": [], "49it": [], "0x7f00e0a52bf0": [], "0x7f00efbdb370": [], "1182604": [], "1469966": [], "989222": [], "566797": [], "0x7fc7d416f670": [], "0x7fc8b15756f0": [], "864210": [], "99it": 13, "254200": [], "852500": [], "81it": [], "0x7fe288d67df0": [], "0x7fe3712ed030": [], "home": 13, "131": 13, "userwarn": 13, "unknown": 13, "ignor": 13, "restart": 13, "cach": 13, "pretrained_model": 13, "huggingface_model": 13, "bertmodel": 13, "classifi": 13, "bia": 13, "anoth": 13, "architectur": 13, "bertforsequenceclassif": 13, "bertforpretrain": 13, "exactli": 13, "38": 13, "667882": 13, "748982": 13, "86it": 13, "613202": 13, "34it": 13, "venv": 13, "lib": 13, "python3": 13, "model_checkpoint": 13, "613": 13, "exist": 13, "rank_zero_warn": 13, "dirpath": 13, "local_rank": 13, "cuda_visible_devic": 13, "param": 13, "trainabl": 13, "66": 13, "281": 13, "estim": 13, "mb": 13, "saniti": 13, "0it": 13, "54": 13, "29it": 13, "694": 13, "v_num": 13, "sion": 13, "691": 13, "122": 13, "98it": 13, "688": 13, "42it": 13, "683": 13, "136": 13, "130": 13, "676": 13, "666": 13, "92": 13, "654": 13, "53it": 13, "639": 13, "stop": 13, "reach": 13, "635500": 13, "135": 13, "metric": 13, "5323014855384827": 13, "1052082": [], "1305281": [], "374491": [], "927943": [], "0x7fdbc23f6b00": [], "0x7fdc9c789ba0": [], "44": [], "overwrit": 3, "992343": [], "1253278": [], "0x7f8b90186a10": [], "0x7f8b91ac9300": [], "31": [], "1310720": [], "1111564": [], "1604963": [], "450032": [], "62it": [], "557753": [], "0x7fa1ac263700": [], "0x7fa1ac262710": [], "444311": [], "309314": [], "45it": 3, "560735": [], "1081006": [], "1542023": [], "384798": [], "554802": [], "534987": [], "436906": [], "0x7fbc8d756980": [], "0x7fbd1dd41990": [], "46": [], "20": [], "1127501": [], "496955": [], "0x7f9254692620": [], "0x7f9263606a70": [], "1299887": [], "1196094": [], "0x7fa7d5c737c0": [], "0x7fa7e6dee8f0": [], "53": [], "845625": [], "458560": [], "685343": [], "1490866": [], "35it": [], "519097": [], "0x7f5b4cd832b0": [], "0x7f5c38303be0": [], "59": [], "321649": [], "459901": [], "1173779": [], "0x7f7b555aabf0": [], "0x7f7b65df9540": [], "308404": 3, "1191563": [], "0x7f4c2ac02ef0": [], "0x7f4d051890f0": [], "399457": [], "1519675": [], "0x7f43a5d8f8e0": [], "0x7f43a5d8f550": [], "956148": [], "1014750": [], "1534501": [], "576140": [], "0x7f5dd1283460": [], "0x7f5dd1283970": [], "descript": 9, "941834": 3, "416652": 3, "1321734": 3, "1018034": 3, "708497": 3, "0x7f35a5f6b5e0": 3, "0x7f36914c7c10": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"us": 0, "bigearthnet": [0, 1, 11], "lmdb": 0, "reader": 0, "select": [0, 1, 3], "band": [0, 1, 3], "label": 0, "type": 0, "mean": 0, "standard": [0, 4], "deviat": 0, "dataset": [1, 2, 3, 12, 13], "datamodul": [1, 3], "bendataset": 1, "split": [1, 3], "restrict": [1, 3], "number": [1, 3], "load": [1, 3], "imag": [1, 3, 8], "bendatamodul": 1, "dataload": [1, 3], "set": [1, 3], "coco": 2, "qa": 2, "cocoqa": 2, "rsvqaxben": 3, "contributor": 4, "coven": 4, "code": [4, 5], "conduct": 4, "our": 4, "pledg": 4, "enforc": 4, "respons": 4, "scope": 4, "guidelin": 4, "1": 4, "correct": 4, "2": 4, "warn": 4, "3": 4, "temporari": 4, "ban": 4, "4": 4, "perman": 4, "attribut": 4, "contribut": 5, "give": 5, "feedback": 5, "increas": 5, "visibl": 5, "directli": 5, "updat": 5, "sourc": 5, "notebook": 5, "depend": 6, "python": 6, "poetri": 6, "licens": 7, "wip": 8, "caption": 8, "configvlm": 9, "get": 10, "start": 10, "model": [10, 11, 12, 13], "configur": [10, 12, 13], "further": 11, "refer": 11, "The": 11, "guid": 11, "pretrain": 11, "tool": 11, "bibliographi": 11, "supervis": 12, "vision": 12, "pre": 12, "train": 12, "pytorch": [12, 13], "lightn": [12, 13], "modul": [12, 13], "creat": [12, 13], "run": [12, 13], "visual": 13, "question": 13, "answer": [3, 13], "rsvqaxbendataset": 3, "token": 3, "class": 3, "specif": 3, "rsvqaxbendatamodul": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 57}, "alltitles": {"Using the BigEarthNet LMDB Reader": [[0, "using-the-bigearthnet-lmdb-reader"]], "Selecting Bands": [[0, "selecting-bands"], [1, "selecting-bands"], [3, "selecting-bands"]], "Label types": [[0, "label-types"]], "Mean and Standard Deviation": [[0, "mean-and-standard-deviation"]], "COCO-QA": [[2, "coco-qa"]], "COCOQA DataSet": [[2, "cocoqa-dataset"]], "Contributor Covenant Code of Conduct": [[4, "contributor-covenant-code-of-conduct"]], "Our Pledge": [[4, "our-pledge"]], "Our Standards": [[4, "our-standards"]], "Enforcement Responsibilities": [[4, "enforcement-responsibilities"]], "Scope": [[4, "scope"]], "Enforcement": [[4, "enforcement"]], "Enforcement Guidelines": [[4, "enforcement-guidelines"]], "1. Correction": [[4, "correction"]], "2. Warning": [[4, "warning"]], "3. Temporary Ban": [[4, "temporary-ban"]], "4. Permanent Ban": [[4, "permanent-ban"]], "Attribution": [[4, "attribution"]], "Contributing": [[5, "contributing"]], "Give feedback": [[5, "give-feedback"]], "Increasing visibility": [[5, "increasing-visibility"]], "Directly update source code or notebooks": [[5, "directly-update-source-code-or-notebooks"]], "Dependencies": [[6, "dependencies"]], "Python (Poetry) Dependencies": [[6, "python-poetry-dependencies"]], "License": [[7, "license"]], "[WIP] Image Captioning": [[8, "wip-image-captioning"]], "Get started": [[10, "get-started"]], "Model Configuration": [[10, "model-configuration"]], "Further references": [[11, "further-references"]], "The BigEarthNet Guide": [[11, "the-bigearthnet-guide"]], "Pretrained models": [[11, "pretrained-models"]], "BigEarthNet Tools": [[11, "bigearthnet-tools"]], "Bibliography": [[11, "bibliography"]], "Supervised Vision Pre-training": [[12, "supervised-vision-pre-training"]], "Pytorch Lightning Module": [[12, "pytorch-lightning-module"], [13, "pytorch-lightning-module"]], "Configuring": [[12, "configuring"], [13, "configuring"]], "Creating Model + Dataset": [[12, "creating-model-dataset"], [13, "creating-model-dataset"]], "Running": [[12, "running"], [13, "running"]], "Visual Question Answering": [[13, "visual-question-answering"]], "BigEarthNet Dataset & Datamodule": [[1, "bigearthnet-dataset-datamodule"]], "BENDataSet": [[1, "bendataset"]], "Splits": [[1, "splits"], [3, "splits"]], "Restricting the number of loaded images": [[1, "restricting-the-number-of-loaded-images"], [3, "restricting-the-number-of-loaded-images"]], "BENDataModule": [[1, "bendatamodule"]], "DataLoader settings": [[1, "dataloader-settings"], [3, "dataloader-settings"]], "ConfigVLM": [[9, "configvlm"]], "RSVQAxBEN Dataset & Datamodule": [[3, "rsvqaxben-dataset-datamodule"]], "RSVQAxBENDataSet": [[3, "rsvqaxbendataset"]], "Tokenizer and Tokenization": [[3, "tokenizer-and-tokenization"]], "Select Number of Classes or specific Answers": [[3, "select-number-of-classes-or-specific-answers"]], "RSVQAxBENDataModule": [[3, "rsvqaxbendatamodule"]]}, "indexentries": {}})
