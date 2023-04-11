Search.setIndex({"docnames": ["extra/BEN_LMDB_Reader", "extra/bigearthnet", "extra/cocoqa", "extra/rsvqaxben", "general/code_of_conduct", "general/contributing", "general/dependencies", "general/license", "image_captioning", "index", "installation", "references", "sup_pretraining", "vlmconfiguration", "vqa", "wip"], "filenames": ["extra/BEN_LMDB_Reader.ipynb", "extra/bigearthnet.ipynb", "extra/cocoqa.ipynb", "extra/rsvqaxben.ipynb", "general/code_of_conduct.md", "general/contributing.md", "general/dependencies.md", "general/license.md", "image_captioning.ipynb", "index.md", "installation.ipynb", "references.md", "sup_pretraining.ipynb", "vlmconfiguration.ipynb", "vqa.ipynb", "wip.md"], "titles": ["Using the BigEarthNet LMDB Reader", "BigEarthNet Dataset &amp; Datamodule", "COCO-QA", "RSVQAxBEN Dataset &amp; Datamodule", "Contributor Covenant Code of Conduct", "Contributing", "Dependencies", "License", "[WIP] Image Captioning", "ConfigVLM", "Installation", "Further references", "Supervised Image Classification", "Model Configuration", "Visual Question Answering (VQA)", "&lt;no title&gt;"], "terms": {"In": [0, 1, 2, 3, 5, 11], "thi": [0, 1, 2, 3, 4, 5, 7, 9, 10, 12, 13, 14], "section": [0, 10, 12, 14], "an": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15], "exampl": [0, 3, 4, 9, 10, 12, 13, 14], "i": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15], "shown": [0, 14], "convert": [0, 3], "lightn": [0, 1, 3, 6, 9], "memori": [0, 1, 3], "map": 0, "databas": 0, "manag": [0, 5, 12, 14], "background": 0, "index": [0, 1, 2, 3], "python": [0, 5, 9, 12, 14], "object": [0, 1, 3, 13], "due": 0, "its": [0, 1, 2, 3, 5], "which": [0, 1, 3, 4, 9, 10, 13, 14], "pickl": 0, "abl": [0, 3], "thread": 0, "safe": 0, "after": [0, 1, 3, 5, 12, 14], "first": [0, 1, 2, 3, 11, 12, 14], "access": [0, 1, 3, 11], "howev": [0, 1, 2, 3], "onli": [0, 1, 2, 3, 12, 14], "fork": 0, "support": [0, 1, 3, 9, 13], "e": [0, 4, 10, 12, 14], "g": [0, 10, 12, 14], "__getitem__": 0, "method": [0, 4], "pytorch": [0, 1, 3, 6, 9], "dataset": [0, 10, 11], "To": [0, 1, 3, 5, 12, 14], "we": [0, 2, 3, 4, 5, 11, 12, 14], "have": [0, 1, 3, 4, 5, 12, 14], "creat": [0, 5, 9, 13], "benlmdbread": [0, 1, 3], "need": [0, 1, 2, 3, 5, 12, 14], "4": [0, 1, 3, 6, 11, 12, 14], "argument": 0, "creation": [0, 9, 12, 14], "name": [0, 1, 3, 11, 13], "directori": [0, 5], "where": [0, 9, 14], "lmbd": 0, "file": [0, 1, 3, 7], "locat": 0, "string": 0, "sequenc": [0, 3, 13], "3": [0, 1, 2, 3, 6, 11, 12, 13, 14], "int": [0, 13, 14], "desir": 0, "imag": [0, 2, 9, 10, 11, 13, 14], "size": [0, 1, 2, 3, 4, 13, 14], "channel": [0, 1, 2, 3, 4, 12, 13, 14], "height": 0, "width": [0, 2], "indic": 0, "ar": [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14], "from": [0, 1, 2, 3, 4, 7, 9, 10, 11, 12, 13, 14], "configvlm": [0, 1, 2, 3, 5, 8, 10, 12, 13, 14, 15], "extra": [0, 1, 2, 3, 6, 10, 12, 14], "ben_lmdb_util": 0, "import": [0, 1, 2, 3, 12, 13, 14], "ben_read": 0, "lmdb_dir": 0, "my_data_path": [0, 1, 2, 3, 12, 14], "path": [0, 1, 2, 3, 12, 14], "image_s": [0, 1, 3, 12, 13, 14], "120": [0, 1, 2, 3, 9, 12, 13, 14], "rgb": [0, 1, 3, 12, 14], "label_typ": 0, "old": 0, "img": [0, 1, 2, 3], "lbl": [0, 1], "s2b_msil2a_20180502t093039_82_40": 0, "expect": [0, 1, 2, 3, 12, 14], "contain": [0, 1, 3, 14], "3x120x120": 0, "annot": 0, "43": [0, 11], "version": [0, 1, 4, 6], "deliv": 0, "torch": [0, 1, 2, 3, 6, 12, 13, 14], "tensor": [0, 1, 2, 3, 13, 14], "list": [0, 5, 12, 14], "complex": 0, "cultiv": 0, "pattern": [0, 4], "land": [0, 1], "princip": 0, "occupi": 0, "agricultur": [0, 3, 14], "signific": 0, "area": [0, 3, 5, 9, 14], "natur": [0, 2, 3, 4], "veget": 0, "broad": 0, "leav": 0, "forest": [0, 3, 14], "transit": [0, 3], "woodland": [0, 3], "shrub": [0, 3], "water": 0, "bodi": [0, 4], "If": [0, 2, 3, 5, 9, 10], "now": [0, 8, 12, 14, 15], "interest": 0, "can": [0, 1, 2, 3, 5, 9, 10, 13, 14], "specif": [0, 1], "return": [0, 1, 12, 14], "b8": 0, "b4": 0, "The": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15], "defin": [0, 3, 12, 14], "begin": 0, "align": [0, 4], "vi": 0, "frac": [0, 1, 3], "b08": 0, "b04": 0, "end": [0, 1, 3, 5, 10, 14], "2": [0, 1, 2, 3, 6, 11, 13, 14], "veg_idx": 0, "0": [0, 1, 2, 3, 6, 10, 12, 13, 14], "1": [0, 1, 2, 3, 6, 10, 11, 12, 14], "08": 0, "dimens": [0, 3], "04": 0, "like": [0, 1, 3, 4, 5, 13], "order": [0, 1, 3], "specifi": [0, 1, 3, 4, 13], "paramet": [0, 1, 2, 3, 12, 13, 14], "note": [0, 1, 3], "also": [0, 1, 3, 4, 13], "ha": [0, 1, 3, 10], "set": [0, 2, 4, 5, 10, 11, 12, 14], "check": [0, 5, 10], "interpol": 0, "alreadi": [0, 14], "appli": [0, 4], "loader": 0, "nn": [0, 12, 14], "function": [0, 1, 3, 10, 12, 14], "corner": 0, "bicub": 0, "mode": 0, "For": [0, 1, 3, 4, 10, 12, 13, 14], "eas": [0, 9], "some": [0, 3, 5, 10, 12, 14], "predefin": [0, 10], "configur": [0, 1, 2, 3, 10], "avail": [0, 1, 4], "without": [0, 3, 4, 7], "all": [0, 1, 3, 4, 5, 7, 10, 11, 12, 13, 14], "pre": [0, 6, 9, 10, 12, 14], "definit": 0, "respect": [0, 1, 4, 12, 13, 14], "s1": [0, 11], "vh": 0, "vv": 0, "s2": [0, 1, 3, 11], "b02": 0, "b03": 0, "b05": 0, "b06": 0, "b07": 0, "b11": 0, "b12": 0, "b8a": 0, "10m20m": 0, "ir": 0, "10": [0, 1, 3, 6, 9, 11, 13, 14], "12": [0, 1, 3, 6, 12, 14], "request": [0, 4, 5, 9], "new": [0, 11], "19": [0, 1, 3, 11, 12], "introduc": [0, 11], "sumbul": [0, 1, 11], "et": [0, 1, 2, 3, 11, 14], "al": [0, 1, 2, 3, 11, 14], "here": [0, 1, 3, 11, 12, 14], "see": [0, 1, 2, 3, 4], "get": [0, 5, 10, 14], "inland": 0, "pprint": [0, 13], "wish": 0, "dimension": 0, "one": [0, 1, 2, 3, 14], "hot": [0, 1, 3], "guarante": 0, "uniform": 0, "convers": 0, "so": [0, 7, 14], "each": [0, 1, 3], "vector": [0, 1, 3], "alwai": [0, 3, 13, 14], "same": [0, 1, 3, 14], "regardless": [0, 4], "user": [0, 9, 14], "ben19_list_to_onehot": 0, "collect": [0, 9, 11, 13], "dure": [0, 3, 4, 12, 14], "initi": [0, 1, 14], "base": [0, 1, 2, 3], "chosen": 0, "ben_reader_1": 0, "print": [0, 1, 3], "f": [0, 3, 12, 14], "std": 0, "ben_reader_2": 0, "b01": 0, "2218": 0, "94553375": 0, "590": 0, "23569706": 0, "1365": 0, "45589904": 0, "675": 0, "88746967": 0, "340": 0, "76769064": 0, "2266": 0, "46036911": 0, "554": 0, "81258967": 0, "1356": 0, "13789355": 0, "page": [1, 2, 3, 5, 9, 10], "describ": [1, 2, 3, 12, 14], "usag": [1, 2, 3, 12, 14], "multi": [1, 11], "spectral": 1, "multilabel": [1, 11], "remot": [1, 9, 11], "sens": [1, 9, 11], "us": [1, 2, 3, 4, 5, 7, 9, 10, 12, 13, 14], "cover": [1, 3, 10], "classif": [1, 11, 13], "offici": [1, 4], "paper": [1, 11], "wa": [1, 2, 3, 4, 14], "publish": [1, 2, 3, 4, 7, 9, 14], "updat": 1, "modal": [1, 11, 14], "detail": [1, 9], "inform": [1, 4, 11, 13], "itself": 1, "pleas": [1, 9], "refer": 1, "public": [1, 4, 11], "guid": [1, 5], "modul": [1, 3], "two": [1, 3, 9, 10], "class": [1, 4, 11, 12, 13, 14], "standard": [1, 3], "util": [1, 3], "data": [1, 2, 3, 11, 12, 14], "pytorch_lightn": [1, 3, 12, 14], "lightningdatamodul": [1, 3], "encapsul": [1, 3, 12, 14], "easi": [1, 3, 9, 14], "applic": [1, 3, 9], "read": [1, 3, 11], "label": [1, 12, 14], "lmdb": [1, 3, 6], "most": [1, 2, 3, 9, 14], "basic": [1, 2, 3, 12], "form": [1, 2, 3, 14], "csv": [1, 3], "assum": [1, 3, 10], "bigearthnetencod": [1, 3], "o": [1, 3], "point": [1, 3], "view": [1, 3], "folder": [1, 2, 3], "10m": [1, 3], "20m": [1, 3], "sentinel": [1, 3, 11], "full": [1, 2, 3, 14], "structur": [1, 2, 3], "mdb": [1, 3], "lock": [1, 3], "test": [1, 2, 3, 5, 9, 12, 14], "train": [1, 2, 3, 10, 11, 12, 14], "val": [1, 3, 12, 14], "ben_datamodule_lmdb_encod": [1, 12], "d": [1, 2, 3], "root_dir": [1, 2, 3], "56": 1, "flip": [1, 3], "choos": [1, 3], "bgr": [1, 3], "axi": [1, 3], "displai": [1, 3, 12, 14], "bring": [1, 3], "ben": 1, "none": [1, 2, 3, 10, 12, 13, 14], "75": [1, 3], "patch": [1, 11], "filter": 1, "differ": [1, 3, 4, 12, 14], "via": [1, 3, 4, 9, 10], "limit": [1, 2, 3, 7], "combin": [1, 3, 9, 10, 13, 14], "call": [1, 3, 12, 14], "get_available_channel_configur": 1, "altern": [1, 10], "faulti": [1, 3], "possibl": [1, 3, 5, 9, 13], "well": [1, 4, 12, 13, 14], "whilst": 1, "rais": 1, "assertionerror": [1, 3], "work": [1, 5, 9, 12, 14], "lmdbreader": 1, "It": [1, 2, 3, 8, 15], "By": [1, 3], "default": [1, 2, 3, 13], "three": [1, 3], "_": [1, 2, 3], "25": [1, 2, 3, 13], "max_img_idx": [1, 2, 3], "n": [1, 3], "alphabet": [1, 3], "A": [1, 3, 4, 7, 11, 13], "larger": [1, 3], "than": [1, 3], "": [1, 3, 4, 9, 10], "case": [1, 3, 10], "equal": [1, 3], "behaviour": [1, 3], "100": [1, 2, 3, 9], "wrap": [1, 3], "automat": [1, 3, 5, 12, 14], "gener": [1, 2, 3, 5, 12, 14], "per": [1, 3], "augment": [1, 3], "shuffl": [1, 3], "etc": [1, 3], "depend": [1, 3, 5, 10, 12, 13, 14], "resiz": [1, 3], "normal": [1, 3, 12, 14], "addition": [1, 3, 9, 14], "nois": [1, 3], "rotat": [1, 3], "overwritten": [1, 3], "below": [1, 3, 13], "setup": [1, 3], "popul": [1, 3], "insid": [1, 3, 12, 14], "stage": [1, 3], "fit": [1, 3, 7, 12, 14], "prepar": [1, 3], "valid": [1, 3, 12, 14], "dm": [1, 3, 12, 14], "data_dir": [1, 3, 12, 14], "befor": [1, 3], "train_d": [1, 3], "val_d": [1, 3], "test_d": [1, 3], "worker": [1, 3, 12, 14], "34": 1, "18": 1, "took": 1, "00": [1, 3], "second": 1, "total": [1, 3], "sampl": 1, "0x7f85b7b91420": 1, "0x7f85b7b93790": 1, "afterward": [1, 3], "easili": [1, 3, 10], "len": [1, 3], "dl": [1, 3], "lceil": [1, 3], "batch": [1, 3, 12, 14], "_size": [1, 3], "rceil": [1, 3], "therefor": [1, 3, 13, 14], "batch_siz": [1, 3], "16": [1, 3], "train_load": [1, 3], "train_dataload": [1, 3], "addit": [1, 3, 9, 10, 14], "pass": [1, 3, 5, 12, 14], "through": [1, 3, 4, 9], "settabl": [1, 3], "num_workers_dataload": [1, 3, 12, 14], "cpu_count": [1, 3], "valu": [1, 3, 12, 13, 14], "mean": [1, 3, 10, 12, 14], "chang": [1, 3, 5], "accompani": [1, 3], "messag": [1, 3], "hint": [1, 3], "Not": [1, 13], "changeabl": 1, "pin": [1, 3], "true": [1, 3, 6, 12, 13, 14], "cuda": [1, 3], "enabl": [1, 9], "devic": [1, 3, 12, 14], "found": [1, 3], "fals": [1, 3, 12, 13, 14], "otherwis": [1, 3, 4, 7], "45": 1, "15": 1, "7": [1, 3, 6], "96mhint": [1, 3, 14], "recommend": [1, 3, 10, 11], "0m": [1, 2, 3, 14], "dataload": [2, 9, 12, 14], "datamodul": [2, 9, 12, 14], "vqa": [2, 3, 10], "ren": [2, 11], "coco_train2014_": 2, "id": [2, 3], "jpg": 2, "b": 2, "coco_val2014_": 2, "j": 2, "z": 2, "qa_qa_test": 2, "json": [2, 3], "qa_qa_train": 2, "cocoqa_datamodul": 2, "cocoqadataset": 2, "question": [2, 3, 4, 11], "answer": [2, 4, 11], "93mwarn": 2, "No": [2, 4], "token": [2, 14], "provid": [2, 3, 4, 5, 7, 9, 11], "berttoken": 2, "uncas": 2, "mai": [2, 3, 4, 5, 14], "result": [2, 3, 12, 14], "veri": 2, "bad": [2, 3], "perform": [2, 3], "network": [2, 12, 13, 14], "other": [2, 3, 4, 5, 7, 11, 12, 13, 14], "load": [2, 14], "50": 2, "pair": [2, 3, 11], "reduc": [2, 3], "start": [2, 3, 5, 10, 12, 14], "101": [2, 3, 14], "2054": 2, "2003": 2, "1996": 2, "3609": 2, "1997": 2, "3933": 2, "102": [2, 3, 14], "As": [2, 3], "out": [2, 3, 7, 10], "languag": [2, 3, 4, 9, 10, 13, 14], "text": [2, 3, 14], "lead": [2, 3, 4], "account": [2, 3, 4], "input": [2, 3, 12, 14], "get_hf_model": [2, 3, 14], "prajjwal1": [2, 3, 14], "bert": [2, 3, 14], "tini": [2, 3, 14], "split": 2, "transform": [2, 6], "number": [2, 12, 14], "img_siz": [2, 3, 12, 14], "should": [2, 9, 13], "high": 2, "seq_length": [2, 3], "200": 2, "5": [2, 3, 6], "32": [2, 13], "3157": 2, "2417": 2, "1012": 2, "bigearthnet": [3, 6, 12], "lobri": [3, 11, 14], "zenodo": [3, 9], "context": 3, "extend": 3, "includ": [3, 4, 7, 9, 11], "origin": 3, "small": 3, "distribut": [3, 7], "packag": [3, 9, 12, 14], "vqa_rsvqaxben": 3, "rsvqaxben_qa_train": 3, "rsvqaxben_qa_v": 3, "rsvqaxben_qa_test": 3, "rsvqaxben_datamodule_lmdb_encod": [3, 14], "2024": [3, 14], "2070": 3, "6138": [3, 14], "2556": [3, 14], "1029": [3, 14], "integ": 3, "length": 3, "shorter": 3, "pad": [3, 14], "zero": 3, "longer": 3, "truncat": 3, "last": 3, "non": [3, 12, 14], "question1": 3, "7976": 3, "2752": [3, 14], "2030": 3, "4910": [3, 14], "8": 3, "question2": 3, "reconstruct": 3, "special": 3, "decod": [3, 14], "cl": [3, 14], "artifici": 3, "present": [3, 10, 14], "sep": [3, 14], "skip_special_token": 3, "current": [3, 10, 13], "preconfigur": 3, "when": [3, 4, 14], "try": [3, 5, 10, 14], "except": 3, "qa": 3, "np": 3, "arrai": [3, 9], "159479": 3, "24it": 3, "564762": 3, "66it": 3, "relev": [3, 11], "certain": 3, "output": [3, 12, 14], "could": [3, 4], "up": [3, 5, 10, 12, 14], "million": 3, "prevent": [3, 13], "explos": 3, "determin": [3, 4], "highest": 3, "reduct": 3, "count": 3, "382691": 3, "97it": 3, "frequent": 3, "about": [3, 4, 5], "96": 3, "379918": 3, "84it": 3, "These": [3, 11, 12, 14], "re": [3, 11], "subset": 3, "requir": [3, 5, 9, 11, 13], "doe": 3, "necessarili": 3, "match": 3, "fewer": 3, "never": 3, "encod": [3, 6], "more": [3, 5, 11], "indexerror": 3, "happen": 3, "element": [3, 14], "selected_answ": 3, "ye": [3, 14], "mix": 3, "0x7f4fa5de74c0": 3, "0x7f4fa5de6fb0": 3, "four": 3, "pin_memori": [3, 14], "overwrit": 3, "member": 4, "leader": 4, "make": [4, 9, 11, 14], "particip": 4, "commun": [4, 5, 9], "harass": 4, "free": [4, 5, 7, 9], "experi": [4, 9], "everyon": [4, 5], "ag": 4, "visibl": 4, "invis": 4, "disabl": 4, "ethnic": 4, "sex": 4, "characterist": 4, "gender": 4, "ident": [4, 14], "express": [4, 7], "level": [4, 11], "educ": 4, "socio": 4, "econom": [4, 9], "statu": [4, 9], "nation": 4, "person": [4, 7], "appear": 4, "race": 4, "cast": 4, "color": [4, 12, 14], "religion": 4, "sexual": 4, "orient": 4, "act": 4, "interact": [4, 11], "wai": [4, 5, 10, 14], "contribut": 4, "open": [4, 5, 9], "welcom": [4, 5], "divers": [4, 9], "inclus": 4, "healthi": 4, "behavior": 4, "posit": 4, "environ": [4, 5], "demonstr": [4, 9], "empathi": 4, "kind": [4, 7], "toward": 4, "peopl": 4, "Being": 4, "opinion": 4, "viewpoint": 4, "give": 4, "gracefulli": 4, "accept": 4, "construct": 4, "feedback": 4, "apolog": 4, "those": 4, "affect": 4, "mistak": [4, 5], "learn": [4, 6], "focus": 4, "what": 4, "best": [4, 5], "just": [4, 12, 14], "u": [4, 12, 14], "individu": [4, 9], "overal": 4, "unaccept": 4, "imageri": 4, "attent": 4, "advanc": [4, 11], "ani": [4, 7, 9, 10], "troll": 4, "insult": 4, "derogatori": 4, "comment": 4, "polit": 4, "attack": 4, "privat": 4, "physic": 4, "email": 4, "address": 4, "explicit": 4, "permiss": [4, 7], "reason": 4, "consid": [4, 9], "inappropri": 4, "profession": 4, "clarifi": 4, "take": [4, 5], "appropri": 4, "fair": 4, "action": [4, 7, 9], "thei": [4, 9], "deem": 4, "threaten": 4, "offens": 4, "harm": 4, "right": [4, 7], "remov": [4, 12, 14], "edit": 4, "reject": 4, "commit": [4, 6], "wiki": 4, "issu": [4, 5, 9], "moder": 4, "decis": 4, "within": [4, 9], "space": [4, 9], "repres": 4, "mail": 4, "post": 4, "social": 4, "media": 4, "appoint": 4, "onlin": 4, "offlin": 4, "event": [4, 7], "instanc": 4, "abus": 4, "report": 4, "insert": 4, "contact": 4, "complaint": 4, "review": 4, "investig": 4, "promptli": 4, "fairli": 4, "oblig": 4, "privaci": 4, "secur": 4, "incid": 4, "follow": [4, 5, 7, 9, 10, 13], "impact": 4, "consequ": 4, "violat": 4, "unprofession": 4, "unwelcom": 4, "written": 4, "clariti": 4, "around": [4, 5, 12, 14], "explan": 4, "why": 4, "apologi": 4, "singl": [4, 12, 14], "seri": 4, "continu": 4, "involv": 4, "unsolicit": 4, "period": 4, "time": [4, 5], "avoid": 4, "extern": 4, "term": 4, "seriou": 4, "sustain": 4, "sort": 4, "allow": [4, 10, 12, 14], "aggress": 4, "disparag": 4, "adapt": 4, "http": [4, 5, 9, 11], "www": 4, "org": [4, 11], "code_of_conduct": 4, "html": 4, "were": [4, 14], "inspir": 4, "mozilla": 4, "ladder": 4, "common": [4, 6], "faq": 4, "translat": 4, "project": [5, 9], "effort": [5, 9], "thank": 5, "you": [5, 8, 9, 10, 14, 15], "look": [5, 13], "how": [5, 10, 13], "There": [5, 10], "mani": [5, 13], "help": 5, "framework": [5, 9, 10, 12, 14], "document": [5, 7, 9, 10, 11], "grow": 5, "coupl": 5, "broader": 5, "easiest": 5, "improv": 5, "highlight": 5, "further": 5, "refin": 5, "would": [5, 10], "discuss": 5, "someth": 5, "featur": [5, 9], "feel": 5, "github": [5, 9, 10], "tell": 5, "star": 5, "poetri": 5, "develop": [5, 9], "download": [5, 10, 11], "instal": [5, 9], "clone": 5, "repositori": [5, 9, 11], "git": [5, 11], "com": [5, 9], "lhackel": [5, 9], "tub": [5, 9], "cd": 5, "replic": 5, "your": 5, "speed": 5, "hack": 5, "pr": 5, "suit": 5, "still": 5, "successfulli": 5, "regener": 5, "our": [5, 11, 12, 14], "back": 5, "quickli": 5, "hard": 5, "stick": 5, "until": 5, "tool": [6, 9], "13": 6, "numpi": [6, 12, 14], "24": 6, "timm": [6, 9, 14], "6": 6, "26": 6, "appdir": 6, "option": [6, 12, 13, 14], "9": [6, 11], "matplotlib": 6, "scikit": 6, "bolt": 6, "post1": 6, "fvcore": 6, "post20221221": 6, "group": [6, 11], "psutil": 6, "dev": 6, "pytest": 6, "coverag": 6, "mock": 6, "furo": 6, "2022": 6, "03": 6, "23": 6, "myst": 6, "nb": 6, "17": 6, "sphinx": 6, "autobuild": 6, "2021": [6, 11], "14": 6, "sphinxcontrib": 6, "bibtex": 6, "preprocessor": 6, "jupyterlab": 6, "tensorboardx": 6, "mit": 7, "copyright": 7, "c": 7, "2023": [7, 9], "leonard": [7, 9], "wayn": 7, "hackel": [7, 9], "herebi": 7, "grant": [7, 9], "charg": 7, "obtain": 7, "copi": 7, "softwar": [7, 11], "associ": [7, 13], "deal": 7, "restrict": 7, "modifi": 7, "merg": 7, "sublicens": 7, "sell": 7, "permit": 7, "whom": 7, "furnish": 7, "do": [7, 12, 14], "subject": 7, "condit": 7, "abov": [7, 12, 14], "notic": 7, "shall": 7, "substanti": 7, "portion": 7, "THE": 7, "AS": 7, "warranti": 7, "OF": 7, "OR": 7, "impli": 7, "BUT": 7, "NOT": [7, 14], "TO": 7, "merchant": 7, "FOR": 7, "particular": 7, "purpos": 7, "AND": 7, "noninfring": 7, "IN": 7, "NO": 7, "author": [7, 9], "holder": 7, "BE": 7, "liabl": 7, "claim": 7, "damag": 7, "liabil": 7, "whether": 7, "contract": 7, "tort": 7, "aris": [7, 9], "connect": 7, "WITH": 7, "content": [8, 15], "select": [8, 12, 14, 15], "activ": [8, 9, 15], "part": [8, 13, 15], "site": 9, "beta": 9, "wip": [9, 15], "librari": [9, 11, 14], "state": 9, "art": 9, "seek": 9, "rapidli": 9, "iter": 9, "model": [9, 10], "sourc": [9, 10], "conveni": 9, "implement": 9, "seamlessli": 9, "popular": 9, "highli": 9, "regard": 9, "huggingfac": [9, 14], "With": 9, "extens": 9, "nearli": 9, "1000": [9, 14], "over": 9, "000": 9, "upload": 9, "offer": 9, "rang": [9, 12, 14], "minim": [9, 13], "Its": 9, "vast": 9, "unparallel": 9, "resourc": 9, "innov": 9, "sophist": 9, "furthermor": 9, "boast": 9, "friendli": 9, "interfac": 9, "streamlin": 9, "exchang": 9, "compon": 9, "thu": 9, "endless": 9, "novel": 9, "built": 9, "throughput": 9, "optim": [9, 12, 14], "r": 9, "moreov": 9, "comprehens": 9, "instruct": 9, "tutori": 9, "overview": 9, "ensur": 9, "smooth": 9, "hassl": 9, "outlin": 9, "process": [9, 11], "upcom": 9, "subsequ": 9, "explor": [9, 11], "exemplifi": 9, "encourag": 9, "visit": 9, "dedic": 9, "receiv": 9, "assist": 9, "submit": 9, "platform": 9, "cite": 9, "misc": 9, "tub_2023": 9, "titl": 9, "year": 9, "month": 9, "mar": 9, "journal": 9, "doi": [9, 11], "5281": 9, "7767951": 9, "howpublish": 9, "url": [9, 11], "european": 9, "research": [9, 11], "council": 9, "erc": 9, "2017": 9, "stg": 9, "bigearth": 9, "under": 9, "759764": 9, "agenc": 9, "da4dt": 9, "precursor": 9, "digit": 9, "twin": 9, "earth": 9, "german": 9, "ministri": 9, "affair": 9, "climat": 9, "ai": 9, "cube": 9, "50ee2012b": 9, "pypi": 10, "pip": 10, "directli": 10, "want": 10, "wheel": 10, "equat": 10, "py3": 10, "whl": 10, "them": 10, "task": [10, 13, 14], "supervis": [10, 13], "pretrain": [10, 14], "fashion": [10, 12, 14], "checkpoint": [10, 14], "explain": 10, "next": 10, "been": 10, "togeth": 10, "googl": 10, "colab": 10, "show": 10, "link": 11, "mm": 11, "nomenclatur": 11, "websit": 11, "everi": 11, "code": [11, 13], "run": 11, "procedur": 11, "tensorflow": 11, "tu": 11, "berlin": 11, "de": 11, "rsim": 11, "s2_43": 11, "classes_model": 11, "s2_19": 11, "simultan": 11, "mm_19": 11, "s1_tool": 11, "geotiff": 11, "script": [11, 12, 14], "extract": 11, "1c": 11, "grd": 11, "tile": 11, "disk": 11, "s2_tool": 11, "while": [11, 12, 14], "skip": 11, "cloudi": 11, "snowi": 11, "archiv": 11, "mm_tool": 11, "sylvain": 11, "beg": 11, "\u00fc": 11, "m": 11, "demir": 11, "devi": 11, "tuia": 11, "rsvqa": 11, "meet": 11, "larg": 11, "scale": 11, "visual": 11, "ieee": 11, "intern": [11, 12, 14], "geoscienc": 11, "symposium": 11, "igarss": 11, "1218": 11, "1221": 11, "mengy": 11, "ryan": 11, "kiro": 11, "richard": 11, "zemel": 11, "neural": [11, 14], "system": 11, "2015": 11, "gencer": 11, "marcela": 11, "charfuelan": 11, "beg\u00fcm": 11, "volker": 11, "markl": 11, "benchmark": 11, "understand": 11, "2019": 11, "juli": 11, "1109": 11, "8900532": 11, "arn": 11, "wall": 11, "tristan": 11, "kreuzig": 11, "filip": 11, "marcelino": 11, "hugo": 11, "costa": 11, "pedro": 11, "benevid": 11, "mario": 11, "caetano": 11, "multimod": 11, "retriev": 11, "geosci": 11, "sen": 11, "mag": 11, "174": 11, "180": 11, "septemb": 11, "mgr": 11, "3089174": 11, "trainer": [12, 14], "integr": [12, 14], "lightningmodul": [12, 14], "pl": [12, 14], "divid": [12, 14], "usual": [12, 14], "loop": [12, 14], "necessari": [12, 14], "training_step": [12, 14], "configure_optim": [12, 14], "fulli": [12, 14], "add": [12, 14], "step": [12, 14], "evalu": [12, 14], "_step": [12, 14], "_epoch_end": [12, 14], "litvisionencod": 12, "wrapper": [12, 14], "among": [12, 14], "thing": [12, 14], "gpu": [12, 14], "cpu": [12, 14], "def": [12, 14], "__init__": [12, 14], "self": [12, 14], "config": [12, 14], "vlmconfigur": [12, 13, 14], "lr": [12, 14], "float": [12, 13, 14], "1e": [12, 14], "super": [12, 14], "batch_idx": [12, 14], "x": [12, 14], "y": [12, 14], "x_hat": [12, 14], "loss": [12, 14], "binary_cross_entropy_with_logit": [12, 14], "log": [12, 14], "adamw": [12, 14], "weight_decai": [12, 14], "01": [12, 14], "mandatori": [12, 14], "validation_step": [12, 14], "validation_epoch_end": [12, 14], "avg_loss": [12, 14], "stack": [12, 14], "test_step": [12, 14], "test_epoch_end": [12, 14], "forward": [12, 14], "becaus": [12, 14], "inner": [12, 14], "manual": [12, 14], "tensorboard": [12, 14], "callback": [12, 14], "vlmtype": [12, 13, 14], "hyperparamet": [12, 14], "model_nam": [12, 14], "resnet18": [12, 13, 14], "seed": [12, 14], "42": [12, 14], "number_of_channel": [12, 14], "epoch": [12, 14], "5e": [12, 14], "Then": [12, 14], "later": [12, 14], "random": [12, 14], "spawn": [12, 14], "subprocess": [12, 14], "seed_everyth": [12, 14], "model_config": [12, 13, 14], "timm_model_nam": [12, 13, 14], "hf_model_nam": [12, 13, 14], "network_typ": [12, 13, 14], "vision_classif": [12, 13], "max_epoch": [12, 14], "acceler": [12, 14], "auto": [12, 14], "log_every_n_step": [12, 14], "logger": [12, 14], "final": [12, 14], "bendatamodul": 12, "quit": [12, 14], "bit": [12, 14], "readabl": [12, 14], "sinc": [12, 14], "slightli": [12, 14], "distort": [12, 14], "anywai": [12, 14], "real": [12, 14], "8461952209472656": 12, "053515881299972534": 12, "43593648076057434": 12, "5633976459503174": 12, "5838469862937927": 12, "5952039957046509": 12, "7836412191390991": 12, "726469874382019": 12, "7546876072883606": 12, "8279280662536621": 12, "19324178993701935": 12, "7901748418807983": 12, "6696745753288269": 12, "8135374784469604": 12, "9674454927444458": 12, "7233631610870361": 12, "6134014129638672": 12, "8439663648605347": 12, "7069821953773499": 12, "central": 13, "dataclass": 13, "decid": 13, "consist": 13, "ultim": 13, "solv": 13, "properti": 13, "unus": 13, "type": 13, "fusion": 13, "seen": 13, "str": 13, "param": 13, "class_nam": 13, "enum": 13, "visual_features_out": 13, "512": 13, "fusion_in": 13, "fusion_hidden": 13, "256": 13, "v_dropout_r": 13, "t_dropout_r": 13, "fusion_dropout_r": 13, "fusion_method": 13, "callabl": 13, "mul": 13, "fusion_activ": 13, "tanh": 13, "drop_rat": 13, "use_pooler_output": 13, "bool": 13, "max_sequence_length": 13, "load_timm_if_avail": 13, "load_hf_if_avail": 13, "facilit": 13, "organ": 13, "global": 13, "variabl": 13, "vqa_classif": [13, 14], "both": 14, "either": 14, "weight": 14, "composit": 14, "rsvqaxben": 14, "instead": 14, "_disassemble_batch": 14, "disassembl": 14, "litvqaencod": 14, "transpos": 14, "tolist": 14, "t": 14, "image_model_nam": 14, "text_model_nam": 14, "warn": 14, "known": 14, "keyword": 14, "convolut": 14, "cnn": 14, "resnet": 14, "oper": 14, "independ": 14, "rsvqaxbendatamodul": 14, "home": 14, "runner": 14, "py": 14, "131": 14, "userwarn": 14, "unknown": 14, "ignor": 14, "restart": 14, "cach": 14, "pretrained_model": 14, "huggingface_model": 14, "bertmodel": 14, "classifi": 14, "bia": 14, "anoth": 14, "architectur": 14, "bertforsequenceclassif": 14, "bertforpretrain": 14, "exactli": 14, "115": 14, "again": 14, "heterogen": 14, "1998": 14, "21770": 14, "10624": 14, "6914": 14, "14769": 14, "24331672489643097": 14, "416130393743515": 14, "4097263514995575": 14, "5235225558280945": 14, "2558377981185913": 14, "4784601926803589": 14, "32770946621894836": 14, "9055449366569519": 14, "7889048457145691": 14, "7592024207115173": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"us": 0, "bigearthnet": [0, 1, 11], "lmdb": 0, "reader": 0, "select": [0, 1, 3], "band": [0, 1, 3], "label": 0, "type": 0, "mean": 0, "standard": [0, 4], "deviat": 0, "dataset": [1, 2, 3, 12, 14], "datamodul": [1, 3], "bendataset": 1, "split": [1, 3], "restrict": [1, 3], "number": [1, 3], "load": [1, 3], "imag": [1, 3, 8, 12], "bendatamodul": 1, "dataload": [1, 3], "set": [1, 3], "coco": 2, "qa": 2, "cocoqa": 2, "rsvqaxben": 3, "rsvqaxbendataset": 3, "token": 3, "class": 3, "specif": 3, "answer": [3, 14], "rsvqaxbendatamodul": 3, "contributor": 4, "coven": 4, "code": [4, 5], "conduct": 4, "our": 4, "pledg": 4, "enforc": 4, "respons": 4, "scope": 4, "guidelin": 4, "1": 4, "correct": 4, "2": 4, "warn": 4, "3": 4, "temporari": 4, "ban": 4, "4": 4, "perman": 4, "attribut": 4, "contribut": 5, "give": 5, "feedback": 5, "increas": 5, "visibl": 5, "directli": 5, "updat": 5, "sourc": 5, "notebook": 5, "depend": 6, "python": 6, "poetri": 6, "licens": 7, "wip": 8, "caption": 8, "configvlm": 9, "instal": 10, "further": 11, "refer": 11, "The": 11, "guid": 11, "pretrain": 11, "model": [11, 12, 13, 14], "tool": 11, "bibliographi": 11, "supervis": 12, "classif": 12, "pytorch": [12, 14], "lightn": [12, 14], "modul": [12, 14], "configur": [12, 13, 14], "creat": [12, 14], "run": [12, 14], "visual": 14, "question": 14, "vqa": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 57}, "alltitles": {"Using the BigEarthNet LMDB Reader": [[0, "using-the-bigearthnet-lmdb-reader"]], "Selecting Bands": [[0, "selecting-bands"], [1, "selecting-bands"], [3, "selecting-bands"]], "Label types": [[0, "label-types"]], "Mean and Standard Deviation": [[0, "mean-and-standard-deviation"]], "BigEarthNet Dataset & Datamodule": [[1, "bigearthnet-dataset-datamodule"]], "BENDataSet": [[1, "bendataset"]], "Splits": [[1, "splits"], [3, "splits"]], "Restricting the number of loaded images": [[1, "restricting-the-number-of-loaded-images"], [3, "restricting-the-number-of-loaded-images"]], "BENDataModule": [[1, "bendatamodule"]], "DataLoader settings": [[1, "dataloader-settings"], [3, "dataloader-settings"]], "COCO-QA": [[2, "coco-qa"]], "COCOQA DataSet": [[2, "cocoqa-dataset"]], "RSVQAxBEN Dataset & Datamodule": [[3, "rsvqaxben-dataset-datamodule"]], "RSVQAxBENDataSet": [[3, "rsvqaxbendataset"]], "Tokenizer and Tokenization": [[3, "tokenizer-and-tokenization"]], "Select Number of Classes or specific Answers": [[3, "select-number-of-classes-or-specific-answers"]], "RSVQAxBENDataModule": [[3, "rsvqaxbendatamodule"]], "Contributor Covenant Code of Conduct": [[4, "contributor-covenant-code-of-conduct"]], "Our Pledge": [[4, "our-pledge"]], "Our Standards": [[4, "our-standards"]], "Enforcement Responsibilities": [[4, "enforcement-responsibilities"]], "Scope": [[4, "scope"]], "Enforcement": [[4, "enforcement"]], "Enforcement Guidelines": [[4, "enforcement-guidelines"]], "1. Correction": [[4, "correction"]], "2. Warning": [[4, "warning"]], "3. Temporary Ban": [[4, "temporary-ban"]], "4. Permanent Ban": [[4, "permanent-ban"]], "Attribution": [[4, "attribution"]], "Contributing": [[5, "contributing"]], "Give feedback": [[5, "give-feedback"]], "Increasing visibility": [[5, "increasing-visibility"]], "Directly update source code or notebooks": [[5, "directly-update-source-code-or-notebooks"]], "Dependencies": [[6, "dependencies"]], "Python (Poetry) Dependencies": [[6, "python-poetry-dependencies"]], "License": [[7, "license"]], "[WIP] Image Captioning": [[8, "wip-image-captioning"]], "ConfigVLM": [[9, "configvlm"]], "Installation": [[10, "installation"]], "Further references": [[11, "further-references"]], "The BigEarthNet Guide": [[11, "the-bigearthnet-guide"]], "Pretrained models": [[11, "pretrained-models"]], "BigEarthNet Tools": [[11, "bigearthnet-tools"]], "Bibliography": [[11, "bibliography"]], "Supervised Image Classification": [[12, "supervised-image-classification"]], "Pytorch Lightning Module": [[12, "pytorch-lightning-module"], [14, "pytorch-lightning-module"]], "Configuring": [[12, "configuring"], [14, "configuring"]], "Creating Model + Dataset": [[12, "creating-model-dataset"], [14, "creating-model-dataset"]], "Running": [[12, "running"], [14, "running"]], "Model Configuration": [[13, "model-configuration"]], "Visual Question Answering (VQA)": [[14, "visual-question-answering-vqa"]]}, "indexentries": {}})