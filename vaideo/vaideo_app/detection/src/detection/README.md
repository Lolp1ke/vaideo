### Обнаружение

Поместите `datatset,backbone` в соответствующую позицию в `mmdetetcion`

Чтобы протестировать детектор и сохранить результаты.

`python tools/test.py <CONFIG_FILE> <CHECKPOINT_FILE> --gpus <GPU_NUM> --out <OUT_FILE>`

Например, протестировать исходные кадры и сохранить результат как results_or.pci

``python tools/test.py configs/R50_FPN_DCN_test_fby.py --gpus 8 --out results_vsi.pcl`

Преобразуйте результаты в соответствующий формат. Просмотрите `utils/pkl2json.py `
